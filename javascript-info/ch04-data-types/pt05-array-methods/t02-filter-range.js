'use strict';

/** A: Returns filtered array arr to elements x where (x >= a && x <= b). */
let filterRange = function (arr, a, b) {
  return arr.filter((x) => x >= a && x <= b);
};

let arr = [5, 3, 8, 1];

console.log(`original array: ${arr}`);
console.log(`filterRange returns modified array: ${filterRange(arr, 1, 4)}`);
console.log(`original array unmodified: ${arr}`);
