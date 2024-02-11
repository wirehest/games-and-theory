'use strict';

/**
 * Given an array of strings, returns the string with unique characters.
 * Spaces are ignored.
 */
function findUniq(arr) {
  let matchCount = 0;
  const sortedUniqChars = function (str) {
    return Array.from(new Set(str.toLowerCase()))
      .filter((c) => c !== ' ')
      .sort()
      .join('');
  };
  const base = sortedUniqChars(arr[0]);

  if (base !== sortedUniqChars(arr[1])) {
    return base === sortedUniqChars(arr[2]) ? arr[1] : arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (base !== sortedUniqChars(arr[i])) return arr[i];
  }
}

console.assert(
  findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']) === 'BbBb',
  'Test 1'
);

console.assert(
  findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']) === 'foo',
  'Test 2'
);

console.assert(findUniq(['silvia', 'vasili', 'victor']) === 'victor', 'Test 3');
