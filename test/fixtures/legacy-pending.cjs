const { parentPort, workerData } = require("node:worker_threads");
const addon = require(workerData.addonPath);
addon.load_tdjson(workerData.library);
addon.td_set_log_message_callback(3, () => {});
addon.td_execute("flood");
const client = addon.td_json_client_create(300);
addon.td_json_client_receive(client);
parentPort.postMessage("ready");
