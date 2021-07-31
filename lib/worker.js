const { parentPort, workerData } = require("worker_threads");
const stringifyIntervals = require("./stringify-intervals");

const { intervals } = workerData;

const res = stringifyIntervals(intervals);

parentPort.postMessage(res);
