/** Returns true/false if the input int. is a perfect square. */
const isSquare = function(n) {
  return Number.isInteger(Math.sqrt(n));
}

console.assert(isSquare(-1) === false);
console.assert(isSquare(0) === true);
console.assert(isSquare(3) === false);
console.assert(isSquare(4) === true);