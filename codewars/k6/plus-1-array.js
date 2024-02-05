'use strict';


/** Returns an array representing the input array plusone. */
function upArray(arr) {
  const isEmpty = arr.length === 0;
  const hasNegative = !arr.every(x => x >= 0);
  const hasMultiDigit = !arr.every(x => ('' + x).length === 1);

  if (isEmpty || hasNegative || hasMultiDigit) {
    return null;
  }

  let incremented = (BigInt(arr.join('')) + BigInt(1) + '');
  const pad = incremented.length > arr.length ? incremented.length : arr.length;
  incremented = incremented.padStart(pad, '0').split('').map(x => +x);

  return incremented;
}


// console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]));
/*
[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]
*/