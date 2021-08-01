const path = require("path");
const { isMainThread, parentPort, workerData } = require("worker_threads");
const { makeExecutableInWorker } = require("./makeExecutableInWorker");

module.exports = makeExecutableInWorker({
  taskPath: path.join(__dirname, "./stringify-intervals.js"),
  isMainThread,
  filename: __filename,
  parentPort,
  workerData,
});
