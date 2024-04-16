const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((a, c) => a + c, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, c) => a * c);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
