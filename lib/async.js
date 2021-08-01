const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  module.exports = function stringifyIntervalsAsync(intervals) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: intervals,
      });

      worker.on("message", resolve);

      worker.on("error", reject);

      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
    });
  };
} else {
  const stringifyIntervals = require("./stringify-intervals");
  const intervals = workerData;
  parentPort.postMessage(stringifyIntervals(intervals));
}
