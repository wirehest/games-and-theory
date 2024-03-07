'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7];

/**
 * A: Filter callback function that returns elements between a and b,
 * inclusive.
 */
const inBetween = function (a, b) {
  return function (x) {
    return a <= x && x <= b ? true : false;
  };
};

/** A: Filter callback function that returns elements in the input array. */
const inArray = function (arr) {
  return function (x) {
    return arr.includes(x);
  };
};

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
