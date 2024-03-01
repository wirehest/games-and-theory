'use strict';


/** Returns array with sums of subarrays [0...n] to [n...n]. */
function partsSums(ls) {
  let sumArray = [0];
  for (let n of ls.reverse()) {
    sumArray.push(+sumArray.slice(-1) + n);
  }
  sumArray.reverse();
  return sumArray;
}