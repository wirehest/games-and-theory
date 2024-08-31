function collatz(n, i = 0) {
  if (n === 1) {
    console.log(i);
    return i;
  }
  if (n % 2 === 0) return collatz(n / 2, ++i);
  return collatz(3 * n + 1, ++i);
}

console.assert(collatz(1) === 0, 'collatz(1) should equal 0');
console.assert(collatz(2) === 1, 'collatz(1) should equal 0');
console.assert(collatz(3) === 7, 'collatz(1) should equal 0');
console.assert(collatz(4) === 2, 'collatz(1) should equal 0');
console.assert(collatz(5) === 5, 'collatz(1) should equal 0');
console.assert(collatz(6) === 8, 'collatz(1) should equal 0');
console.assert(collatz(7) === 16, 'collatz(1) should equal 0');
console.assert(collatz(8) === 3, 'collatz(1) should equal 0');
console.assert(collatz(15) === 17, 'collatz(1) should equal 0');
