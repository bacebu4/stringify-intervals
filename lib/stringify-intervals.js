const { last, first } = require("./utils");

const isConsecutiveNumbers = (a, b) => a + 1 === b;

function formGroups(array) {
  const groups = [];

  for (const el of array) {
    const prevGroup = last(groups);
    const lastElInPrevGroup = last(prevGroup);

    if (isConsecutiveNumbers(lastElInPrevGroup, el)) {
      prevGroup.push(el);
    } else {
      const newGroup = [el];
      groups.push(newGroup);
    }
  }

  return groups;
}

const stringifyGroups = (groups) =>
  groups
    .map((group) => {
      const firstEl = first(group);
      const lastEl = last(group);

      if (firstEl === lastEl) {
        return firstEl.toString();
      }

      if (isConsecutiveNumbers(firstEl, lastEl)) {
        return firstEl + "," + lastEl;
      }

      return firstEl + "-" + lastEl;
    })
    .join(",");

function stringifyIntervals(array) {
  const groups = formGroups(array);
  return stringifyGroups(groups);
}

module.exports = stringifyIntervals;
