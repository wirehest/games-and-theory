'use strict';

const zero = (oper) => oper?.(0) ?? 0;
const one = (oper) => oper?.(1) ?? 1;
const two = (oper) => oper?.(2) ?? 2;
const three = (oper) => oper?.(3) ?? 3;
const four = (oper) => oper?.(4) ?? 4;
const five = (oper) => oper?.(5) ?? 5;
const six = (oper) => oper?.(6) ?? 6;
const seven = (oper) => oper?.(7) ?? 7;
const eight = (oper) => oper?.(8) ?? 8;
const nine = (oper) => oper?.(9) ?? 9;

function plus(num) {
  return function (oper) {
    return oper ? oper + num : num;
  };
}

function minus(num) {
  return function (oper) {
    return oper ? oper - num : -num;
  };
}

function times(num) {
  return function (oper) {
    return oper ? oper * num : 0;
  };
}

function dividedBy(num) {
  return function (oper) {
    return oper ? Math.floor(oper / num) : 0;
  };
}

console.assert(seven(times(five())) === 35);
console.assert(four(plus(nine())) === 13);
console.assert(eight(minus(three())) === 5);
console.assert(six(dividedBy(two())) === 3);
