const sumAll = function (a, b) {
  if ([a, b].some((x) => !Number.isInteger(x)) || [a, b].some((x) => x < 0)) {
    return 'ERROR';
  }

  if (a > b) [a, b] = [b, a];
  return (b / 2) * (a + b);
};

// Do not edit below this line
module.exports = sumAll;
