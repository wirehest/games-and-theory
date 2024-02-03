'use strict';


/** Returns an object with counts of unique characters in the input string. */
function count(string) {
  const uniques = new Set(string);
  let countObj = {};
  for (let char of uniques) {
    countObj[char] = [...string.matchAll(`${char}`)].length;
  }
  return countObj;
}