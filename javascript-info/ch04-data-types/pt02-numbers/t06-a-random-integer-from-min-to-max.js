'use strict';

/**
 * Generates a random integer number from min to max including both min and max
 * as possible values.
 */
function randomInteger(min, max) {
  // Adjusted min and max to equalize min-max probabilities.
  const adjMin = min - 0.5;
  const adjMax = max + 0.5;

  return +(Math.random() * (adjMax - adjMin) + adjMin).toFixed();
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
