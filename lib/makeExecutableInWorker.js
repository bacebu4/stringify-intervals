const { Worker } = require("worker_threads");

function makeExecutableInWorker({
  isMainThread,
  filename,
  taskPath,
  parentPort,
  workerData,
}) {
  if (isMainThread) {
    return function runInWorkerExported(data) {
      return new Promise((resolve, reject) => {
        const worker = new Worker(filename, {
          workerData: data,
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
    const task = require(taskPath);
    const data = workerData;
    parentPort.postMessage(task(data));
  }
}

module.exports = { makeExecutableInWorker };
