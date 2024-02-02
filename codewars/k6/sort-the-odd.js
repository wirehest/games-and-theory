'use strict';


/** Returns an array with odd numbers sorted and even numbers left in-place. */
function sortArray(array) {
  let oddSorted = array.filter(x => x % 2 !== 0).sort((a, b) => a - b);

  for (let [i, num] of array.entries()) {
    array[i] = (num % 2 !== 0) ? oddSorted.shift() : num;
  }
  return array;
}