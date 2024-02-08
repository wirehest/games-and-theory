'use strict';


/** Returns an array with all zeroes moved to the end. */
function moveZeros(arr) {
  const newArr = arr.filter(x => x !== 0);
  const zeroCount = arr.length - newArr.length;

  return newArr.concat(Array.from({ length: zeroCount }, x => 0));
}