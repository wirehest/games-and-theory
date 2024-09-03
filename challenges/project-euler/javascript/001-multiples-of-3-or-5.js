// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfMultiplesImperative(cap, divisors) {
  let multiples = [];

  for (let i = 0; i < cap; i++) {
    for (let divisor of divisors) {
      if (i % divisor === 0) {
        multiples.push(i);
        break;
      }
    }
  }

  return multiples.reduce((acc, c) => acc + c, 0);
}

console.assert(
  sumOfMultiplesImperative(10, [3, 5]) === 23,
  'check imperative test 1',
);

console.assert(
  sumOfMultiplesImperative(30, [3, 5]) === 195,
  'check imperative test 2',
);

function sumOfMultiplesRecursive(cap, divisors, initial = true) {
  // needed to exclude initial cap value
  if (initial) return sumOfMultiplesRecursive(--cap, divisors, false);

  // base case
  if (cap < 3) return 0;

  let sum = 0;
  for (let divisor of divisors) {
    if (cap % divisor === 0) {
      sum = cap;
      break;
    }
  }

  return sum + sumOfMultiplesRecursive(--cap, divisors, false);
}

console.assert(
  sumOfMultiplesRecursive(10, [3, 5]) === 23,
  'check recursive test 1',
);

console.assert(
  sumOfMultiplesRecursive(30, [3, 5]) === 195,
  'check recursive test 2',
);

console.log(`Answer to Problem 1: ${sumOfMultiplesRecursive(1000, [3, 5])}`);
