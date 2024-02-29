/** Compresses a string with run-length encoding. */
export const encode = (str) => {
  if (!str.length) return '';

  let encoded = '';
  let subStrStart = 0;
  let subStrChar = str[0];

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) continue;
    let length = i - subStrStart > 1 ? i - subStrStart : '';
    encoded += length + subStrChar;
    [subStrStart, subStrChar] = [i, str[i]];
  }
  return encoded;
};

/** Decodes a string compressed with run-length encoding. */
export const decode = (enc) => {
  if (!enc) return '';

  let decoded = '';
  let chars = [...enc].filter((x) => /[a-z ]/iu.test(x));
  let counts = enc
    .slice(0, -1)
    .split(/[a-z ]/iu)
    .map((x) => (+x === 0 ? x + 1 : x));

  if (chars.length !== counts.length) throw new Error('Array length mismatch');
  for (let [i, char] of chars.entries()) {
    decoded += char.repeat(counts[i]);
  }
  return decoded;
};

console.assert(
  encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB') ===
    '12WB12W3B24WB',
  '#1'
);
console.assert(decode('2A3B4C') === 'AABBBCCCC', '#2');
console.assert(decode('') === '', '#3');
console.assert(decode('XYZ') === 'XYZ', '#4');
console.assert(
  decode('12WB12W3B24WB') ===
    'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB',
  '#5'
);
console.assert(decode('2 hs2q q2w2 ') === '  hsqq qww  ', '#6');
console.assert(decode(encode('zzz ZZ  zZ')) === 'zzz ZZ  zZ', '#7');
