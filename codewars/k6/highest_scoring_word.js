/** Returns the highest-scoring word in the input string based on each 
 * letter's position in the alphabet.
 */
function high(x) {
  const wordArray = x.split(' ').map(w => [w, undefined]);
  let scoreObject = Object.fromEntries(wordArray);
  let highScore = null;
  
  for (const word in scoreObject) {
    const letterScores = word.split('').map(char => char.charCodeAt()-96);
    const wordScore = letterScores.reduce((accum, currVal) => accum + currVal);
    scoreObject[word] = wordScore;
  } 
 
  highScore = Math.max(...Object.values(scoreObject));
  return Object.keys(scoreObject).find(key => scoreObject[key] === highScore);
}

console.assert(high('man i need a taxi up to ubud') === 'taxi');
console.assert(high('what time are we climbing up the volcano') === 'volcano');
console.assert(high('take me to semynak') === 'semynak');
console.assert(high('aa b') === 'aa');