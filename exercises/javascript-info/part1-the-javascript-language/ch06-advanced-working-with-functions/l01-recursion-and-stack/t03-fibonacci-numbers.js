/** A: Recursion-only Fib function. */
function recursiveFib(n) {
  if (n === 1 || n === 2) return 1;
  return recursiveFib(n - 2) + recursiveFib(n - 1);
}

console.assert(recursiveFib(3) === 2);
console.assert(recursiveFib(7) === 13);
// console.assert(recursiveFib(77) === 5527939700884757); // slow

/** A: Recursive Fib function with memoization. */
function memoFib(n, memo = { 1: 1, 2: 1 }) {
  if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = memoFib(n - 2, memo) + memoFib(n - 1, memo);
    return memo[n];
  }
}

console.assert(memoFib(3) === 2);
console.assert(memoFib(7) === 13);
console.assert(memoFib(77) === 5527939700884757);

/** A: Calculates Fib dynamically. */
function dynamicFib(n) {
  let fib = [1, 1, 2];
  if (n < 3) base[n - 1];
  for (let i = 3; i < n; i++) {
    fib[0] = fib[1];
    fib[1] = fib[2];
    fib[2] = fib[0] + fib[1];
    console.log(fib[0]);
  }
  return fib.at(-1);
}

console.assert(dynamicFib(3) === 2);
console.assert(dynamicFib(7) === 13);
console.assert(dynamicFib(77) === 5527939700884757);
