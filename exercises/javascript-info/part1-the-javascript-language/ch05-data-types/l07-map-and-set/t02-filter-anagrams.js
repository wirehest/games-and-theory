'use strict';

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

/** A: Returns an array cleared of anagrams. */
function aclean(arr) {
  /** Makes nested array with [[uniqueChars, word]...] */
  const getUniqueChars = function (word) {
    // Creates array of unique chars in word.
    word = [...new Set(word.toLowerCase())];

    // Sorts then joins back to string.
    word = word.sort().join('');

    return word;
  };

  const charsWordArray = arr.map((word) => [getUniqueChars(word), word]);
  const charsWordObj = Object.fromEntries(charsWordArray);

  return Object.values(charsWordObj);
}
