'use strict';


/** Returns a string with vowels replaced by numbers. */
function encode(string) {
  const vowelEncode = {a: 1, e: 2, i: 3, o: 4, u: 5};
  let encoded = string.split('').map(x => vowelEncode[x] ?? x).join('');
  return encoded;
}

/** Returns a string with numbers changed back to vowels. */
function decode(string) {
  const vowelDecode = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'};
  let decoded = string.split('').map(x => vowelDecode[x] ?? x).join('');
  return decoded;
}