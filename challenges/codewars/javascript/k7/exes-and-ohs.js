'use strict';


/** Checks if a string has the name number of 'x' and 'o' characters. */
function XO(str) {
  const xPattern = /x/g;
  const oPattern = /o/g;
  const xMatches = [...str.toLowerCase().matchAll(xPattern)].length;
  const oMatches = [...str.toLowerCase().matchAll(oPattern)].length;

  return (xMatches === oMatches) ? true : false;
}


console.assert(XO('xo') === true, 'xo');
console.assert(XO('xxOo') === true, 'xxOo');
console.assert(XO('xxxm') === false, 'xxxm');
console.assert(XO('Oo') === false, 'Oo');
console.assert(XO('ooom') === false, 'ooom');