'use strict';


/** Returns the complementary side of a DNA strand. */
function dnaStrand(dna) {
  const dnaArray = dna.toUpperCase().split('');
  const compStrand =  dnaArray.map(x => 
    x === 'A' ? 'T'
  : x === 'T' ? 'A'
  : x === 'C' ? 'G'
  : 'C'
  ).join('');
   
  return compStrand;  
}