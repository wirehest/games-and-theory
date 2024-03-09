/** Returns the factorial of n. */
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.assert(factorial(5) === 120);
console.assert(factorial(4) === 24);
