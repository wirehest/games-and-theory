'use strict';


/** 
 * Returns the character missing from an otherwise consecutive array of
 * characters.
 */
function findMissingLetter(array) {
  const charCodes = array.map(x => x.charCodeAt());
  let [a] = charCodes.filter((_, i, a) => a[i] - a[i+1] !== -1);
  
  return String.fromCharCode(a + 1);
}