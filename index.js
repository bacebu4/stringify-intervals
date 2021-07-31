const stringifyIntervals = require("./lib/stringify-intervals");
const stringifyIntervalsAsync = require("./lib/async");

module.exports = {
  stringifyIntervals: stringifyIntervalsAsync,
  stringifyIntervalsSync: stringifyIntervals,
};
