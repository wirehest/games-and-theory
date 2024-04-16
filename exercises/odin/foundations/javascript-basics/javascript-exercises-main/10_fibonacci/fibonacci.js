const fibonacci = function (pos) {
  pos = +pos;
  if (pos === 0) return 0;
  if (pos < 0) return 'OOPS';

  let fib = [1, 1];
  while (fib.length < pos) {
    fib.push(fib.at(-1) + fib.at(-2));
  }
  return fib[pos - 1];
};

// Do not edit below this line
module.exports = fibonacci;
