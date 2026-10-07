const { parentPort, workerData } = require("node:worker_threads");
const addon = require(workerData.addonPath);
addon.load_tdjson(workerData.library);
const client = addon.td_json_client_create(300);
let pending = addon.td_json_client_receive(client);
pending.catch(() => {});
parentPort.on("message", async (request) => {
  if (request === "close") {
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
parentPort.postMessage("ready");
