'use strict';

/** Returns the string str with the first character uppercased. */
function ucFirst(str) {
  return str.length === 0 ? '' : str[0].toUpperCase() + str.slice(1);
}

console.assert(ucFirst('') === '');
console.assert(ucFirst('john') === 'John');
