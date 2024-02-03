'use strict';


/** 
 * Returns index N where the sum of the integers to the left of N equals the 
 * sum of the integers to the right of N. If there is no such index, returns -1.
 */
function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    const sliceLeft = arr.slice(0, i);
    const sliceRight = arr.slice(i + 1, arr.length);

    const sumLeft = sliceLeft.length === 0 ? 0
      : sliceLeft.reduce((a, c) => a + c);
    const sumRight = sliceRight.length === 0 ? 0
      : sliceRight.reduce((a, c) => a + c);

    if (sumLeft === sumRight) return i;
  }
  return -1;
}


console.assert(findEvenIndex([1,2,3,4,3,2,1]) === 3);
console.assert(findEvenIndex([1,100,50,-51,1,1]) === 1);
console.assert(findEvenIndex([1,2,3,4,5,6]) === -1);
console.assert(findEvenIndex([20,10,30,10,10,15,35]) === 3);