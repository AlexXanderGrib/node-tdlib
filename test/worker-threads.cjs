// Opt-in smoke test against real TDLib; no credentials or database initialization.
// Build first, then run: node test/worker-threads.cjs legacy (or modern).
// modern demonstrates a manual broker, not a migrated public adapter.
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
  if (mode === "legacy") {
    const { TDLibAddon } = require(path.join(root, "dist/addon.js"));
    const { Client } = require(path.join(root, "dist/index.js"));
    const adapter = await TDLibAddon.create(library);
    const client = new Client(adapter);
    const closed = new Promise((resolve) =>
      client.updates.subscribe((update) => {
        if (
          update._ === "updateAuthorizationState" &&
          update.authorization_state._ === "authorizationStateClosed"
        )
          resolve();
      })
    );
    await client.start();
    parentPort.postMessage({ type: "ready" });
    await new Promise((resolve) => parentPort.once("message", resolve));
    for (let sequence = 0; sequence < requestsPerWorker; sequence++) {
      const version = await client.api.getOption({ name: "version" });
      assert.equal(version.value, expectedVersion);
      const state = await client.api.getAuthorizationState({});
      assert.equal(state._, "authorizationStateWaitTdlibParameters");
    }
    parentPort.postMessage({ type: "done", id, responses: requestsPerWorker * 2 });
    await new Promise((resolve) => parentPort.once("message", resolve));
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
  const mode = process.argv[2] || "legacy";
  assert.ok(["legacy", "modern"].includes(mode), "Use legacy or modern");
  const library =
    process.env.TDLIB_PATH || require("@tdlib-native/tdjson").tdlibPath;
  const addon = require(addonPath);
  addon.load_tdjson(library);
  addon.td_execute('{"@type":"setLogVerbosityLevel","new_verbosity_level":0}');
  const expectedVersion = JSON.parse(
    addon.td_execute('{"@type":"getOption","name":"version"}')
  ).value;
  if (mode === "modern") addon.tdn_init(0.1);

  const workers = [];
  const owners = new Map();
  const ready = [];
  const done = [];
  const exits = [];
  let stopReceiving = false;
  let receiveLoop;
  const timeout = setTimeout(() => {
    console.error("Worker smoke test timed out");
    process.exit(1);
  }, 20000);
  try {
    for (let id = 0; id < 4; id++) {
      const clientId = mode === "modern" ? addon.td_create_client_id() : undefined;
      const botWorker = new Worker(__filename, {
        workerData: { mode, library, id, clientId, expectedVersion }
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
      exits.push(
        new Promise((resolve, reject) => {
          botWorker.once("error", reject);
          botWorker.once("exit", (code) =>
            code === 0 ? resolve() : reject(new Error(`Worker exit: ${code}`))
          );
        })
      );
    }
    await Promise.all(ready);
    if (mode === "modern") {
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
    workers.forEach((botWorker) => botWorker.postMessage({ type: "close" }));
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
    if (mode === "modern") addon.tdn_unref();
  }
}

(isMainThread ? main() : worker()).catch((error) => {
  console.error(error);
  process.exit(1);
});
