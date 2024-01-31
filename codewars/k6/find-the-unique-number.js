/** Finds the unique number in an array. */
function findUniq(arr) {
  for (n of new Set(arr)) {
    if (arr.indexOf(n) === arr.lastIndexOf(n)) {
      return n;
    } 
  }
}

console.assert(findUniq([ 1, 0, 0 ]) === 1);
console.assert(findUniq([ 0, 1, 0 ]) === 1);
console.assert(findUniq([ 0, 0, 1 ]) === 1);
console.assert(findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2);
console.assert(findUniq([ 1, 1, 2, 1, 1 ]) === 2);
console.assert(findUniq([ 3, 10, 3, 3, 3 ]) === 10);