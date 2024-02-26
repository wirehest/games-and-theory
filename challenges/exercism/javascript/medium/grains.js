/** Returns the count of grains on the chess square specified. */
export const square = (sq) => {
  if (sq < 1 || sq > 64) throw new Error('square must be between 1 and 64');
  return String(2n ** BigInt(sq - 1));
};

/** Returns the total number of grains on the chessboard. */
export const total = () => {
  return String(2n ** 64n - 1n);
};

console.assert(square(1) === '1', '#1');
console.assert(square(2) === '2', '#2');
console.assert(square(3) === '4', '#3');
console.assert(square(64) === '9223372036854775808', '#4');
console.assert(total() === '18446744073709551615', '#5');
