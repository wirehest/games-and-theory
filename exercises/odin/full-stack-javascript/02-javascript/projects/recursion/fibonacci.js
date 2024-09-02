function fibs(n) {
  if (n < 0) throw new Error('n cannot be less than 0');

  let fib = [0, 1];
  if (n <= 2) return fib.slice(0, n);

  for (let i = 0; i < n - 2; i++) {
    fib.push(fib.at(-2) + fib.at(-1));
  }

  return fib;
}

console.assert(JSON.stringify(fibs(2)) === '[0,1]', 'Check fibs(2)');
console.assert(
  JSON.stringify(fibs(8)) === '[0,1,1,2,3,5,8,13]',
  'Check fibs(8)',
);

function fibsRec(n) {
  if (n < 0) throw new Error('n cannot be less than 0');

  let fib = [0, 1];
  if (n <= 2) return fib.slice(0, n);

  return [...fibsRec(n - 1), fibsRec(n - 2).at(-1) + fibsRec(n - 1).at(-1)];
}

console.assert(JSON.stringify(fibsRec(2)) === '[0,1]', 'Check fibsRec(2)');
console.assert(
  JSON.stringify(fibsRec(8)) === '[0,1,1,2,3,5,8,13]',
  'Check fibsRec(8)',
);
