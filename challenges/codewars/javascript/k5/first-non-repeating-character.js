/**
 * Returns the first non-repeatng character in a string.
 * Case-insensitive, but returns the non-repeater in the correct case.
 */
function firstNonRepeatingLetter(str) {
  let lowerCaseStr = str.toLowerCase();
  let nonRepeating = [...new Set(lowerCaseStr)].filter(
    (x) => lowerCaseStr.indexOf(x) === lowerCaseStr.lastIndexOf(x)
  );
  return str[lowerCaseStr.indexOf(nonRepeating[0])] ?? '';
}

console.assert(firstNonRepeatingLetter('a') === 'a');
console.assert(firstNonRepeatingLetter('stress') === 't');
console.assert(firstNonRepeatingLetter('moonmen') === 'e');
console.assert(firstNonRepeatingLetter('mmmmmmm') === '');
console.assert(firstNonRepeatingLetter('sTreSS') === 'T');
