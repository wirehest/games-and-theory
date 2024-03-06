'use strict';

/** A: Removes elements from array arr outside of range a-to-b, inclusive. */
let filterRangeInPlace = function (arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) arr.splice(i, 1);
  }
};
