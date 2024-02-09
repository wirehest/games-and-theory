'use strict';

/** Returns the last digit of n**m. */
function lastDigit(n, m) {
  if (m === 0n) return 1n;

  let digits = [];
  for (let i = 1n; i <= 4n; i++) {
    digits.push(n ** i % 10n);
  }
  switch (m % 4n) {
    case 0n:
      return digits[3];
    case 1n:
      return digits[0];
    case 2n:
      return digits[1];
    case 3n:
      return digits[2];
  }
}

console.assert(lastDigit(4n, 1n) === 4n);
console.assert(lastDigit(4n, 2n) === 6n);
console.assert(lastDigit(9n, 7n) === 9n);
console.assert(lastDigit(96602596148n, 0n) === 1n, '96602596148');
