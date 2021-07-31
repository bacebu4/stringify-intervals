# Usage

Run `npm i bacebu4/stringify-intervals` for installation process

For asynchronous usage

```js
const { stringifyIntervals } = require("bacebu4/stringify-intervals");

(async () => {
  const stringified = await stringifyIntervals([1, 2, 3]);
})();
```

For synchronous usage

```js
const { stringifyIntervalsSync } = require("bacebu4/stringify-intervals");

const stringified = stringifyIntervalsSync([1, 2, 3]);
```
