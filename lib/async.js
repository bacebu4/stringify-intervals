const { Worker } = require("worker_threads");
const path = require("path");

function stringifyIntervalsAsync(intervals) {
  return new Promise((resolve, reject) => {
    const workerPath = path.join(__dirname, "./worker.js");

    const worker = new Worker(workerPath, {
      workerData: { intervals },
    });

    worker.on("message", (result) => resolve(result));

    worker.on("error", (error) => reject(error));

    worker.on("exit", (exitCode) => {
      if (exitCode === 0) {
        resolve(null);
      }

      reject(new Error(`Worker exited with code ${exitCode}`));
    });
  });
}

module.exports = stringifyIntervalsAsync;
