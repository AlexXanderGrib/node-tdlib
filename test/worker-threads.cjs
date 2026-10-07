// Opt-in smoke test against real TDLib; no credentials or database initialization.
// Build first, then run: node test/worker-threads.cjs public (or termination/raw).
// raw demonstrates the retained low-level receiver with a manual broker.
const assert = require("node:assert/strict");
const path = require("node:path");
const {
  Worker,
  isMainThread,
  parentPort,
  workerData
} = require("node:worker_threads");

const root = path.resolve(__dirname, "..");
const addonPath = path.join(root, "build/Release/td.node");
const requestsPerWorker = 50;

async function worker() {
  const { mode, library, id, clientId, expectedVersion } = workerData;
  if (mode === "public") {
    const { TDLibAddon } = require(path.join(root, "dist/addon.js"));
    const { Client } = require(path.join(root, "dist/index.js"));
    const adapter = await TDLibAddon.create(library);
    const client = new Client(adapter);
    let initialized;
    const initialState = new Promise((resolve) => {
      initialized = resolve;
    });
    const closed = new Promise((resolve) =>
      client.updates.subscribe((update) => {
        assert.equal("@client_id" in update, false);
        if (
          update._ === "updateAuthorizationState" &&
          update.authorization_state._ === "authorizationStateWaitTdlibParameters"
        )
          initialized();
        if (
          update._ === "updateAuthorizationState" &&
          update.authorization_state._ === "authorizationStateClosed"
        )
          resolve();
      })
    );
    await client.start();
    // Authentication must receive its first update without an application call.
    await initialState;
    parentPort.postMessage({ type: "ready" });
    await new Promise((resolve) => parentPort.once("message", resolve));
    for (let sequence = 0; sequence < requestsPerWorker; sequence++) {
      const version = await client.api.getOption({ name: "version" });
      assert.equal("@client_id" in version, false);
      assert.equal(version.value, expectedVersion);
      const state = await client.api.getAuthorizationState({});
      assert.equal(state._, "authorizationStateWaitTdlibParameters");
    }
    parentPort.postMessage({ type: "done", id, responses: requestsPerWorker * 2 });
    let command = await new Promise((resolve) =>
      parentPort.once("message", resolve)
    );
    if (command.type === "continue") {
      for (let sequence = 0; sequence < requestsPerWorker; sequence++) {
        const version = await client.api.getOption({ name: "version" });
        assert.equal(version.value, expectedVersion);
      }
      parentPort.postMessage({ type: "alive", id, responses: requestsPerWorker });
      command = await new Promise((resolve) => parentPort.once("message", resolve));
    }
    assert.equal(command.type, "close");
    await client.api.close({});
    await closed;
    await client.destroy();
    parentPort.close();
    return;
  }

  const addon = require(addonPath);
  addon.load_tdjson(library);
  let received = 0;
  let nextSequence = 0;
  parentPort.on("message", (message) => {
    if (message.type === "go") {
      for (let sequence = 0; sequence < requestsPerWorker; sequence++) {
        addon.td_send(
          clientId,
          JSON.stringify({
            "@type": "getOption",
            name: "version",
            "@extra": { id, sequence }
          })
        );
      }
    } else if (message.type === "close") {
      addon.td_send(clientId, '{"@type":"close"}');
    } else if (message.type === "event") {
      const event = message.event;
      assert.equal(event["@client_id"], clientId);
      if (event["@extra"]) {
        assert.equal(event["@extra"].id, id);
        assert.equal(event["@extra"].sequence, nextSequence++);
        assert.equal(event.value, expectedVersion);
        if (++received === requestsPerWorker) {
          parentPort.postMessage({ type: "done", id, responses: received });
        }
      }
      if (
        event["@type"] === "updateAuthorizationState" &&
        event.authorization_state["@type"] === "authorizationStateClosed"
      ) {
        parentPort.close();
      }
    }
  });
  parentPort.postMessage({ type: "ready" });
}

async function main() {
  const mode = process.argv[2] || "public";
  assert.ok(
    ["public", "termination", "raw"].includes(mode),
    "Use public, termination, or raw"
  );
  const library =
    process.env.TDLIB_PATH || require("@tdlib-native/tdjson").tdlibPath;
  const addon = require(addonPath);
  addon.load_tdjson(library);
  addon.td_execute('{"@type":"setLogVerbosityLevel","new_verbosity_level":0}');
  const expectedVersion = JSON.parse(
    addon.td_execute('{"@type":"getOption","name":"version"}')
  ).value;
  if (mode === "raw") addon.tdn_init(0.1);

  const workers = [];
  const owners = new Map();
  const ready = [];
  const done = [];
  const exits = [];
  const alive = [];
  const terminating = new Set();
  let stopReceiving = false;
  let receiveLoop;
  const timeout = setTimeout(() => {
    console.error("Worker smoke test timed out");
    process.exit(1);
  }, 20000);
  try {
    for (let id = 0; id < 4; id++) {
      const clientId = mode === "raw" ? addon.td_create_client_id() : undefined;
      const botWorker = new Worker(__filename, {
        workerData: {
          mode: mode === "termination" ? "public" : mode,
          library,
          id,
          clientId,
          expectedVersion
        }
      });
      workers.push(botWorker);
      if (clientId !== undefined) owners.set(clientId, botWorker);
      const waitFor = (type) =>
        new Promise((resolve, reject) => {
          botWorker.on("message", (message) => {
            if (message.type === type) resolve(message);
          });
          botWorker.once("error", reject);
        });
      ready.push(waitFor("ready"));
      done.push(waitFor("done"));
      alive.push(waitFor("alive"));
      exits.push(
        new Promise((resolve, reject) => {
          botWorker.once("error", reject);
          botWorker.once("exit", (code) =>
            code === 0 || (code === 1 && terminating.has(id))
              ? resolve()
              : reject(new Error(`Worker exit: ${code}`))
          );
        })
      );
    }
    await Promise.all(ready);
    if (mode === "raw") {
      receiveLoop = (async () => {
        while (!stopReceiving) {
          const raw = await addon.td_receive();
          if (raw === null) continue;
          const event = JSON.parse(raw);
          const owner = owners.get(event["@client_id"]);
          assert.ok(owner, "Every event must have a known client owner");
          owner.postMessage({ type: "event", event });
        }
      })();
      // Surface dispatcher failures immediately, even while waiting for workers.
      receiveLoop.catch((error) => {
        console.error(error);
        process.exit(1);
      });
    }
    workers.forEach((botWorker) => botWorker.postMessage({ type: "go" }));
    const results = await Promise.all(done);
    if (mode === "termination") {
      terminating.add(0);
      assert.equal(await workers[0].terminate(), 1);
      workers
        .slice(1)
        .forEach((botWorker) => botWorker.postMessage({ type: "continue" }));
      results.push(...(await Promise.all(alive.slice(1))));
    }
    workers
      .filter((_, id) => !terminating.has(id))
      .forEach((botWorker) => botWorker.postMessage({ type: "close" }));
    await Promise.all(exits);
    stopReceiving = true;
    if (receiveLoop) await receiveLoop;
    console.log(
      JSON.stringify({
        mode,
        tdlibVersion: expectedVersion,
        workers: workers.length,
        results,
        cleanShutdown: true
      })
    );
  } finally {
    clearTimeout(timeout);
    stopReceiving = true;
    await Promise.all(workers.map((botWorker) => botWorker.terminate()));
    if (mode === "raw") addon.tdn_unref();
  }
}

(isMainThread ? main() : worker()).catch((error) => {
  console.error(error);
  process.exit(1);
});
