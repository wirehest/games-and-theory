'use strict';

/** Returns the maximum subarray sum of the input array. */
let getMaxSubSum = (arr) => {
  let maxSum = 0;

  for (let i = 0, j = arr.length; i < arr.length - 1; --j) {
    if (i === j) {
      j = arr.length;
      i++;
    }

    let subSum = arr.slice(i, j).reduce((a, c) => a + c);
    if (subSum > maxSum) maxSum = subSum;
  }
  return maxSum;
};

console.assert(getMaxSubSum([1, -2, 3, 4, -9, 6]) === 7);
