'use strict';

/** A: Returns a sorted, shallow copy of the input array. */
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ['HTML', 'JavaScript', 'CSS'];
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);
