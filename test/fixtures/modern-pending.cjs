const { parentPort, workerData } = require("node:worker_threads");
const addon = require(workerData.addonPath);
addon.load_tdjson(workerData.library);
addon.tdn_init(300);
addon.td_receive();
parentPort.postMessage("ready");
