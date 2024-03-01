'use strict';


/** 
 * Moves the first letter of each word to the end then adds "ay."
 * Leaves punctuation untouched.
 */
function pigIt(str) {
  let wordArray = str.split(' ');
  let pigArray = [];

  for (let word of wordArray) {
    if ([...word].every(x => (65 <= x.charCodeAt() && x.charCodeAt() <= 122))) {
      pigArray.push(word.slice(1,) + word[0] + 'ay');
    } else {
      pigArray.push(word);
    }
  }
  return pigArray.join(' ');
}


console.assert(pigIt('Pig latin is cool') === 'igPay atinlay siay oolcay');
console.assert(pigIt('This is my string') === 'hisTay siay ymay tringsay');