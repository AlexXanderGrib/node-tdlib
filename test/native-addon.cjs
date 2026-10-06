const { before, test } = require("node:test");
const assert = require("node:assert/strict");
const { execFile } = require("node:child_process");
const { cp, mkdir, writeFile } = require("node:fs/promises");
const path = require("node:path");
const { promisify } = require("node:util");

const exec = promisify(execFile);
const root = path.resolve(__dirname, "..");
const defaultAddonPath = path.join(root, "build/Release/td.node");
const addonPath = process.env.TDLIB_NATIVE_ADDON_PATH || defaultAddonPath;
const directory = path.join(root, "build/test-fixtures");
const extension = process.platform === "darwin" ? ".dylib" : ".so";
const library = path.join(directory, `tdjson${extension}`);
const incomplete = path.join(directory, `incomplete${extension}`);
const publicPackage = path.join(directory, "public-package");

before(async () => {
  await mkdir(directory, { recursive: true });
  const args = [
    "-std=c++17",
    "-shared",
    "-fPIC",
    "-pthread",
    path.join(__dirname, "fixtures/tdjson.cpp")
  ];
  await exec(process.env.CXX || "c++", [...args, "-o", library]);
  await exec(process.env.CXX || "c++", [
    ...args,
    "-DMISSING_SYMBOL",
    "-o",
    incomplete
  ]);
  // Exercise the packaged adapter with a CommonJS dispatcher like the real
  // binary package, independent of optional packages installed on the host.
  await cp(path.join(root, "dist"), path.join(publicPackage, "dist"), {
    recursive: true
  });
  const dispatcher = path.join(publicPackage, "node_modules/@tdlib-native/tdjson");
  await mkdir(dispatcher, { recursive: true });
  await writeFile(
    path.join(dispatcher, "index.js"),
    'module.exports = require("./platform.cjs");\n'
  );
  await writeFile(
    path.join(dispatcher, "platform.cjs"),
    `module.exports = { tdlibPath: ${JSON.stringify(library)} };\n`
  );
});

async function run(source) {
  const program = `
    const assert = require('node:assert/strict');
    const { Worker } = require('node:worker_threads');
    const { setTimeout: delay } = require('node:timers/promises');
    const addonPath = ${JSON.stringify(addonPath)};
    const library = ${JSON.stringify(library)};
    const incomplete = ${JSON.stringify(incomplete)};
    const addon = require(addonPath);
    (async () => { ${source} })().then(
      () => console.log('PASS'),
      error => { console.error(error); process.exit(1); }
    );`;
  const { stdout } = await exec(process.execPath, ["--expose-gc", "-e", program], {
    timeout: 10000
  });
  assert.match(stdout, /PASS/);
}

test("failed symbol loads leave no dangling functions and can be retried", () =>
  run(`
  assert.equal('load_tdjson_static' in addon, false);
  assert.equal(addon.get_loading_mode(), 'dynamic');
  assert.throws(() => addon.load_tdjson(''), /nonempty library path/);
  assert.throws(() => addon.load_tdjson(library + '\\0ignored'), /NUL/);
  assert.throws(() => addon.load_tdjson(incomplete), /td_json_client_send/);
  assert.equal(addon.is_td_loaded(), false);
  assert.throws(() => addon.td_json_client_create(0), /not loaded/);
  assert.equal(addon.load_tdjson(library), true);
  assert.equal(addon.load_tdjson(library), true);
  assert.throws(() => addon.load_tdjson(incomplete), /already loaded/);
  assert.equal(addon.td_execute('{}'), '{}');
  addon.unload_tdjson();
  assert.equal(addon.is_td_loaded(), false);
  addon.load_tdjson(library);
  addon.unload_tdjson();
`));

test("validates values before narrowing and retries failed modern initialization", () =>
  run(`
  addon.load_tdjson(library);
  for (const timeout of [NaN, Infinity, -1, 301]) {
    assert.throws(() => addon.td_json_client_create(timeout), /timeout/);
    assert.throws(() => addon.tdn_init(timeout), /timeout/);
  }
  for (const id of [NaN, Infinity, 1.5, 0, -1, 2 ** 32 + 1]) {
    assert.throws(() => addon.td_send(id, '{}'), /client ID/);
  }
  for (const level of [NaN, Infinity, -1, 1.5, 2 ** 32]) {
    assert.throws(() => addon.td_set_log_message_callback(level, null), /verbosity/);
  }
  assert.throws(() => addon.td_execute('{}\\0ignored'), /NUL/);
  assert.equal(JSON.parse(addon.td_execute('stats')).clients, 0);
  addon.tdn_init(0);
  assert.throws(() => addon.tdn_init(0), /already initialized/);
  assert.equal(await addon.td_receive(), null);
  addon.tdn_unref();
`));

test("preserves sync and async responses larger than 1 MiB", () =>
  run(`
  addon.load_tdjson(library);
  const expected = addon.td_execute('large');
  assert.equal(JSON.parse(expected).value.length, 2 * 1024 * 1024);
  assert.equal(addon.td_json_client_execute(null, 'large'), expected);
  assert.equal(addon.td_execute('null'), null);
  const client = addon.td_json_client_create(0);
  addon.td_json_client_send(client, expected);
  assert.equal(await addon.td_json_client_receive(client), expected);
  assert.equal(await addon.td_json_client_receive(client), null);
  addon.td_json_client_destroy(client);
  addon.unload_tdjson();
`));

test("rejects duplicate receives and cancels long waits before client destruction", () =>
  run(`
  addon.load_tdjson(library);
  const client = addon.td_json_client_create(300);
  const receiving = addon.td_json_client_receive(client);
  const rejected = assert.rejects(receiving, /destroyed/);
  await assert.rejects(addon.td_json_client_receive(client), /not finished/);
  await delay(20);
  assert.throws(() => addon.unload_tdjson(), /active/);
  const start = Date.now();
  addon.td_json_client_destroy(client);
  assert.ok(Date.now() - start < 1000);
  await rejected;
  await assert.rejects(addon.td_json_client_receive(client), /destroyed/);
  assert.throws(() => addon.td_json_client_send(client, '{}'), /destroyed/);
  assert.throws(() => addon.td_json_client_execute(client, '{}'), /destroyed/);
  addon.td_json_client_destroy(client);
  assert.equal(JSON.parse(addon.td_execute('stats')).clients, 0);
  addon.unload_tdjson();
`));

test("honors the full receive timeout across short polling intervals", () =>
  run(`
  addon.load_tdjson(library);
  const client = addon.td_json_client_create(0.25);
  const start = Date.now();
  assert.equal(await addon.td_json_client_receive(client), null);
  assert.ok(Date.now() - start >= 230);
  addon.td_json_client_destroy(client);
  addon.unload_tdjson();
`));

test("queued callbacks remain safe when a client external is garbage-collected", () =>
  run(`
  addon.load_tdjson(library);
  let client = addon.td_json_client_create(0);
  addon.td_json_client_send(client, '{}');
  const received = addon.td_json_client_receive(client).catch(error => error);
  client = null;
  for (let i = 0; i < 30; i++) {
    global.gc();
    await delay(5);
    if (JSON.parse(addon.td_execute('stats')).clients === 0) break;
  }
  await received;
  assert.equal(JSON.parse(addon.td_execute('stats')).clients, 0);
  addon.unload_tdjson();
`));

test("bounds log floods, frees failed enqueues, and supports callback replacement", () =>
  run(`
  addon.load_tdjson(library);
  const messages = [];
  addon.td_set_log_message_callback(1024, (level, text) => messages.push([level, text]));
  assert.throws(() => addon.unload_tdjson(), /active/);
  addon.td_execute('flood');
  await delay(50);
  assert.ok(messages.length > 0 && messages.length <= 256);
  assert.ok(messages.every(([, text]) => text.length <= 16 * 1024));
  for (let i = 0; i < 50; i++) {
    addon.td_set_log_message_callback(3, () => {});
  }
  addon.td_set_log_message_callback(0, null);
  addon.unload_tdjson();
`));

test("legacy clients clean up when a Node worker is terminated during receive", () =>
  run(`
  addon.load_tdjson(library);
  for (let i = 0; i < 5; i++) {
    const worker = new Worker(\`
      const { parentPort, workerData } = require('node:worker_threads');
      const addon = require(workerData.addonPath);
      addon.load_tdjson(workerData.library);
      addon.td_set_log_message_callback(3, () => {});
      addon.td_execute('flood');
      const client = addon.td_json_client_create(300);
      addon.td_json_client_receive(client);
      parentPort.postMessage('ready');
    \`, { eval: true, workerData: { addonPath, library } });
    await new Promise((resolve, reject) => { worker.once('message', resolve); worker.once('error', reject); });
    await worker.terminate();
    assert.equal(JSON.parse(addon.td_execute('stats')).clients, 0);
  }
  addon.unload_tdjson();
`));

test("concurrent worker clients keep responses separate and survive a sibling termination", () =>
  run(`
  addon.load_tdjson(library);
  const workers = [];
  const message = worker => new Promise((resolve, reject) => {
    worker.once('message', resolve);
    worker.once('error', reject);
  });
  try {
    const ready = [];
    for (let id = 0; id < 3; id++) {
      const worker = new Worker(\`
        const { parentPort, workerData } = require('node:worker_threads');
        const addon = require(workerData.addonPath);
        addon.load_tdjson(workerData.library);
        const client = addon.td_json_client_create(300);
        let pending = addon.td_json_client_receive(client);
        pending.catch(() => {});
        parentPort.on('message', async request => {
          if (request === 'close') {
            addon.td_json_client_destroy(client);
            parentPort.close();
            return;
          }
          addon.td_json_client_send(client, request);
          const response = await pending;
          pending = addon.td_json_client_receive(client);
          pending.catch(() => {});
          parentPort.postMessage(response);
        });
        parentPort.postMessage('ready');
      \`, { eval: true, workerData: { addonPath, library } });
      workers.push(worker);
      ready.push(message(worker));
    }
    assert.deepEqual(await Promise.all(ready), ['ready', 'ready', 'ready']);
    assert.equal(JSON.parse(addon.td_execute('stats')).clients, 3);
    assert.throws(() => addon.unload_tdjson(), /active/);
    const requests = workers.map((_, id) => JSON.stringify({ id, round: 1 }));
    const replies = workers.map(message);
    workers.forEach((worker, id) => worker.postMessage(requests[id]));
    assert.deepEqual(await Promise.all(replies), requests);
    // All three clients now have a receive pending. Stop just one environment.
    await workers[0].terminate();
    assert.equal(JSON.parse(addon.td_execute('stats')).clients, 2);
    const remaining = workers.slice(1);
    const next = remaining.map((_, id) => JSON.stringify({ id: id + 1, round: 2 }));
    const responses = remaining.map(message);
    remaining.forEach((worker, id) => worker.postMessage(next[id]));
    assert.deepEqual(await Promise.all(responses), next);
    const exits = remaining.map(worker => new Promise(resolve => worker.once('exit', resolve)));
    remaining.forEach(worker => worker.postMessage('close'));
    assert.deepEqual(await Promise.all(exits), [0, 0]);
    assert.equal(JSON.parse(addon.td_execute('stats')).clients, 0);
    addon.unload_tdjson();
  } finally {
    await Promise.all(workers.map(worker => worker.terminate()));
  }
`));

test("modern receivers belong to one environment and can be recreated after teardown", () =>
  run(`
  addon.load_tdjson(library);
  for (let i = 0; i < 5; i++) {
    const worker = new Worker(\`
      const { parentPort, workerData } = require('node:worker_threads');
      const addon = require(workerData.addonPath);
      addon.load_tdjson(workerData.library);
      addon.tdn_init(300);
      addon.td_receive();
      parentPort.postMessage('ready');
    \`, { eval: true, workerData: { addonPath, library } });
    await new Promise((resolve, reject) => { worker.once('message', resolve); worker.once('error', reject); });
    assert.throws(() => addon.tdn_init(0), /already initialized/);
    assert.throws(() => addon.td_receive(), /uninitialized/);
    await worker.terminate();
  }
  addon.unload_tdjson();
`));

test("unreferenced modern workers allow natural process shutdown", () =>
  run(`
  addon.load_tdjson(library);
  addon.tdn_init(300);
  addon.td_receive();
  addon.tdn_unref();
`));

test("reports user log callback exceptions without throwing across the C callback", () =>
  run(`
  addon.load_tdjson(library);
  const error = new Promise(resolve => process.once('uncaughtException', resolve));
  addon.td_set_log_message_callback(3, () => { throw new Error('log callback failed'); });
  const [caught] = await Promise.all([error, delay(30)]);
  assert.match(caught.message, /log callback failed/);
  addon.td_set_log_message_callback(0, null);
  addon.unload_tdjson();
`));

// This test uses the built public adapter to cover its lifecycle and packaging.
test("CommonJS and ESM public adapters resolve the default binary dispatcher", () =>
  run(`
  const { pathToFileURL } = require('node:url');
  const commonjs = require(${JSON.stringify(path.join(publicPackage, "dist/addon.js"))});
  const esm = await import(pathToFileURL(${JSON.stringify(path.join(publicPackage, "dist/addon.mjs"))}).href);
  for (const { TDLibAddon } of [commonjs, esm]) {
    const adapter = await TDLibAddon.create(undefined, addonPath);
    assert.equal(adapter.execute(null, '{}'), '{}');
    const client = adapter.create(0);
    adapter.send(client, '{"default":"works"}');
    assert.equal(await adapter.receive(client), '{"default":"works"}');
    await adapter.destroy(client);
    addon.unload_tdjson();
  }
`));

test("the public adapter receives concurrently and destroys clients promptly", () =>
  run(`
  const { TDLibAddon } = require(${JSON.stringify(path.join(root, "dist/addon.js"))});
  const adapter = await TDLibAddon.create(library, ${JSON.stringify(addonPath === defaultAddonPath ? undefined : addonPath)});
  const waiting = adapter.create(300);
  const ready = adapter.create(0);
  const pending = adapter.receive(waiting);
  const rejected = assert.rejects(pending, /destroyed/);
  adapter.send(ready, '{}');
  const start = Date.now();
  assert.equal(await adapter.receive(ready), '{}');
  await adapter.destroy(waiting);
  assert.ok(Date.now() - start < 1000);
  await rejected;
  await assert.rejects(adapter.destroy(waiting), /already destroyed/);
  await assert.rejects(adapter.receive(waiting), /destroyed/);
  assert.throws(() => adapter.send(waiting, '{}'), /destroyed/);
  assert.throws(() => adapter.execute(waiting, '{}'), /destroyed/);
  const message = new Promise(resolve => adapter.setLogMessageCallback(3, resolve));
  assert.equal(await message, 'registered');
  adapter.setLogMessageCallback(0, null);
  await adapter.destroy(ready);
  addon.unload_tdjson();
`));

test("modern receives preserve large responses and prevent unloading managed clients", () =>
  run(`
  addon.load_tdjson(library);
  addon.tdn_init(0);
  const id = addon.td_create_client_id();
  const expected = addon.td_execute('large');
  addon.td_send(id, expected);
  assert.equal(await addon.td_receive(), expected);
  assert.equal(await addon.td_receive(), null);
  assert.throws(() => addon.unload_tdjson(), /modern client IDs/);
  addon.tdn_unref();
`));
