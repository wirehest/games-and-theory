/** 
 * Returns the middle character of the input string (or two characters, if 
 * the input is even-length) 
 */
function getMiddle(s) {
  const mid = Math.round(s.length / 2) - 1
  const indices = (s.length % 2 === 0) ? [mid, mid + 2] : [mid, mid + 1];
  console.log(indices);
  return s.slice(...indices);
}

console.assert(getMiddle('test') === 'es')