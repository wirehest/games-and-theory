'use strict';

/** Converts num to words. */
function number2words(num) {
  let numberWords = [];
  const numWords = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  /** Converts the input to a padded string and returns two substrings. */
  function getNumArray(num) {
    const numArray = (num + '').padStart(6, 0);
    return [numArray.slice(0, 3), numArray.slice(3, 6)];
  }

  /** Parses substrings of the input number. */
  function parser(numArray) {
    let parsed = [];

    if (numArray === '000') return;
    if (!(numArray[0] === '0')) {
      parsed.push(numWords[numArray[0]], 'hundred');
    }
    if (!+numArray.slice(1, 3)) return parsed;

    if (numWords[+numArray.slice(1, 3)] === undefined) {
      parsed.push(
        numWords[numArray[1] + '0'] + ('-' + numWords[numArray[2]] || '')
      );
    } else {
      parsed.push(numWords[+numArray.slice(1, 3)]);
    }

    return parsed;
  }

  if (num === 0) return 'zero';
  if (Object.keys(numWords).includes(num)) return numWords[num];

  const numArray = getNumArray(num);
  const firstHalf = parser(numArray[0]);
  const secondHalf = parser(numArray[1]);

  numberWords = firstHalf
    ? firstHalf.concat('thousand', secondHalf)
    : secondHalf;

  return numberWords.join(' ').trim();
}
