'use strict';


/** Returns the sum of integers in the range specified. */
function getSum(a, b) {
  let makeRange = (x, y) => {
    const list = [];
    for (let i = Math.min(x, y); i < Math.max(x, y) + 1; i++) {
      list.push(i);
    }
    return list;
  }
  const range = makeRange(a, b);
  return range.reduce((accum, current) => accum + current);
}

console.assert(getSum(1, 0) === 1);