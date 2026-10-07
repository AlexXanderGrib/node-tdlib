const { parentPort, workerData } = require("node:worker_threads");
const addon = require(workerData.addonPath);
addon.load_tdjson(workerData.library);
const client = addon.td_client_create(300);
let pending = addon.td_client_receive(client);
pending.catch(() => {});
parentPort.on("message", async (request) => {
  if (request === "close") {
    await addon.td_client_destroy(client);
    parentPort.close();
    return;
  }
  addon.td_client_send(client, request);
  const response = JSON.parse(await pending);
  pending = addon.td_client_receive(client);
  pending.catch(() => {});
  parentPort.postMessage({ bot: response.bot, round: response.round });
});
parentPort.postMessage("ready");
