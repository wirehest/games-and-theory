'use strict';


/** Returns the sum of the two smallest integers in an array. */
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

console.assert(sumTwoSmallestNumbers([5, 8, 12, 19, 22]) === 13);
console.assert(sumTwoSmallestNumbers([15, 28, 4, 2, 43]) === 6);
console.assert(sumTwoSmallestNumbers([3, 87, 45, 12, 7]) === 10);
console.assert(sumTwoSmallestNumbers([23, 71, 33, 82, 1]) === 24);
console.assert(sumTwoSmallestNumbers([52, 76, 14, 12, 4]) === 16);