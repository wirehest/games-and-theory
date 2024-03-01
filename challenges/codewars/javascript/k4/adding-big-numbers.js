/**
 * Returns a sum as a string without exponential notation.
 * Does not use BigInt.
 */
function add(a, b) {
  const maxLength = Math.max(a.length, b.length);
  const aReversed = [...a].reverse();
  const bReversed = [...b].reverse();
  let digits = [];

  let carry = 0;
  for (let i = 0; i < maxLength; i++) {
    let sum = +(aReversed[i] || 0) + +(bReversed[i] || 0) + carry;
    carry = 0;

    if (sum > 9) carry++;
    digits.push(String(sum % 10));
  }
  if (carry === 1) digits.push('1');

  return digits.reverse().join('');
}
