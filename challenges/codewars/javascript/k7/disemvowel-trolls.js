/** Returns the input string with vowels (not including 'y') removed. */
function disemvowel(str) {
  let noVowels = str;
  for (v of 'aeiouAEIOU'.split('')) {
    noVowels = noVowels.replaceAll(v, '');
  }
  console.log(noVowels);
  return noVowels;
}

console.assert(disemvowel('This website is for losers LOL!')
  === 'Ths wbst s fr lsrs LL!');