/** Returns the number in an array that appears an odd number of times. */
function findOdd(arr) {
  for (let n of new Set(arr)) {
    if (!!(arr.reduce((count, elem) => elem === n ? ++count : count, 0) % 2)) {
      return n;
    }
  }
}