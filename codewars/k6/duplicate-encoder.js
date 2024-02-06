'use strict';


/** Converts a string based on character counts. */
function duplicateEncode(word) {
  word = word.toLowerCase();
  let encoded = '';

  for (let c of word) {
    encoded += [...word].filter(x => x === c).length > 1 ? ')' : '(';
  }
  return encoded;
}


console.assert(duplicateEncode('din') === '(((');
console.assert(duplicateEncode('recede') === '()()()');
console.assert(duplicateEncode('Success') === ')())())');
console.assert(duplicateEncode('(( @') === '))((');