'use strict';

Math.round = function (number) {
  const r = (number * 10) % 10;
  return r < 5 ? (number * 10 - r) / 10 : (number * 10 - r + 10) / 10;
};

Math.ceil = function (number) {
  const r = (number * 10) % 10;
  return r > 0 ? (number * 10 - r + 10) / 10 : (number * 10 - r) / 10;
};

Math.floor = function (number) {
  const r = (number * 10) % 10;
  return (number * 10 - r) / 10;
};

console.assert(Math.round(4.2) === 4);
console.assert(Math.round(4.8) === 5);
console.assert(Math.ceil(4.2) === 5);
console.assert(Math.ceil(0) === 0);
console.assert(Math.floor(4.8) === 4);
console.assert(Math.floor(1) === 1);
