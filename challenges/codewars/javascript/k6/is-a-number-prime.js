'use strict';


/** Returns whether a number is prime via trial division. */
function isPrime(num) {
  if (num <= 1) return false; // Negative numbers can't be prime.

  const end = Math.sqrt(num);
  for (let i = 2; i <= end; i++) {
    if (num % i === 0) return false;
  }
  return true;
}


console.assert(isPrime(0) === false, "0");
console.assert(isPrime(1) === false, "1");
console.assert(isPrime(2) === true, "2");
console.assert(isPrime(73) === true, "73");
console.assert(isPrime(75) === false, "75");
console.assert(isPrime(-1) === false, "-1");