// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?

const NUMBER = 600_851_475_143;

function largestPrimeFactor(num, divisor = Math.round(Math.sqrt(num))) {
  if (divisor < 2) return;
  if (num % divisor === 0) {
    console.log(
      `${num} = ${divisor} * ${num / divisor}, ` +
        `checking if ${divisor} is prime`,
    );
    if (isPrime(divisor)) {
      console.log(`largest prime factor: ${divisor}`);
      return;
    }
  }
  // for TOP: recursion here
  return largestPrimeFactor(num, --divisor);
}

function largestPrimeFactorIter(num, divisor = Math.round(Math.sqrt(num))) {
  while (divisor > 1) {
    if (num % divisor === 0) {
      console.log(
        `${num} = ${divisor} * ${num / divisor}, ` +
          `checking if ${divisor} is prime`,
      );
      if (isPrime(divisor)) {
        console.log(`largest prime factor: ${divisor}`);
        return;
      }
    }
    --divisor;
  }
}

function isPrime(num, divisor = Math.round(Math.sqrt(num))) {
  if (divisor < 2) return true;
  if (num % divisor === 0) return false;
  return isPrime(num, --divisor);
}

// largestPrimeFactor(NUMBER); // recursive version, exceeds max stack
largestPrimeFactorIter(NUMBER);
