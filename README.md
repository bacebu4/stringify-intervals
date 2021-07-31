# Usage

Run `npm i stringify-intervals` for installation process

For asynchronous usage

```js
const { stringifyIntervals } = require("stringify-intervals");

(async () => {
  const stringified = await stringifyIntervals([1, 2, 3]);
})();
```

For synchronous usage

```js
const { stringifyIntervalsSync } = require("stringify-intervals");

const stringified = stringifyIntervalsSync([1, 2, 3]);
```
