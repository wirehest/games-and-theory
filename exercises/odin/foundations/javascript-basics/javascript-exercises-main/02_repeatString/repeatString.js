const repeatString = function (str, count) {
  if (count < 0) return 'ERROR';

  let repeatedString = '';

  // String method repeat exists, but implementing
  // here with a for loop per the instructions.
  for (let i = 0; i < count; i++) {
    repeated += str;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
