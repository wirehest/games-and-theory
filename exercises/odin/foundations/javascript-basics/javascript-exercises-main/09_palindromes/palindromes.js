const palindromes = function (string) {
  let cleanStr = string
    .toLowerCase()
    .split('')
    .filter((x) => 'abcdefghijklmnopqrstuvwxyz0123456789'.includes(x))
    .join('');
  let reversed = cleanStr.split('').reverse().join('');

  return cleanStr === reversed;
};

palindromes('ZZZZ car, a man, a maracaz.');

// Do not edit below this line
module.exports = palindromes;
