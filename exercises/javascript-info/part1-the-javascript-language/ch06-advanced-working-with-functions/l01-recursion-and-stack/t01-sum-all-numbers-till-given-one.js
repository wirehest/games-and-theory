/** A: Returns the sum of 1 + 2 + 3 + ... + n via a for loop. */
function forLoopSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/** A: Returns the sum of 1 + 2 + 3 + ... + n via recursion. */
function sumTo(n) {
  let sum = 0;
  return n === 1 ? 1 : n + sumTo(n - 1);
}

/** A: Returns the sum of 1 + 2 + 3 + ... + n via formula. */
function arithmeticProgression(n) {
  return (n / 2) * (2 + (n - 1));
}

console.assert(forLoopSum(100) === 5050);
console.assert(sumTo(100) === 5050);
console.assert(arithmeticProgression(100) === 5050);
console.log(sumTo(100_000)); // call stack exceeded
