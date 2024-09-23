/** Computes the prime factors of a given natural number */
export const primeFactors = (num) => {
  let factors = [];
  let divisor = 2;

  if (num <= 1) return factors;
  while (num > 1) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num /= divisor;
      continue;
    } else {
      while (!isPrime(++divisor)) {
        break;
      }
    }
  }
  return factors;
};

function isPrime(num, divisor = Math.round(Math.sqrt(num))) {
  if (divisor < 2) return true;
  if (num % divisor === 0) return false;
  return isPrime(num, --divisor);
}

console.assert(isPrime(6) === false, '6 should not be prime');
console.assert(isPrime(7) === true, '7 should be prime');
console.assert(isPrime(13) === true, '13 should be prime');
console.assert(isPrime(23) === true, '23 should be prime');

console.assert(
  JSON.stringify(primeFactors(27)) === '[3,3,3]',
  'Error with input 27',
);
console.assert(
  JSON.stringify(primeFactors(625)) === '[5,5,5,5]',
  'Error with input 625',
);
console.assert(
  JSON.stringify(primeFactors(93819012551)) === '[11,9539,894119]',
  'Error with input 93,819,012,551',
);
