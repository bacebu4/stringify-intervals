# Usage

Run `npm i stringify-intervals` for installation process

For asynchronous usage:

```js
const { stringifyIntervals } = require("stringify-intervals");

(async () => {
  const stringified = await stringifyIntervals([1, 2, 3, 5, 9, 10, 11]);
  // the result will be `1-3,5,9-11`
})();
```

For synchronous usage:

```js
const { stringifyIntervalsSync } = require("stringify-intervals");

const stringified = stringifyIntervalsSync([1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002];
// in this case result will be `1-6,100,1091,1999-2002`
```

More example cases available in tests.
