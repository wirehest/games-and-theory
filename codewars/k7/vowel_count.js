/** Return the count of vowels in the given string. */
function getCount(str) {
  const pattern = /[aeiouAEIOU]/g;
  const matches = [...str.matchAll(pattern)];
  return matches.length;
}


console.assert(getCount('abracadabra') === 5);
console.assert(getCount('pear tree') === 4);