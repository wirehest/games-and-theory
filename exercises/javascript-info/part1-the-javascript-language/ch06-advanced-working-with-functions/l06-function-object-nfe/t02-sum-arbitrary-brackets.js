// Write function sum that would work like this:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

// P.S. Hint: you may need to setup custom object to primitive conversion for
// your function.

function sum(a) {
  let tally = a;

  function f(b) {
    tally += b;
    return f;
  }

  f.toString = () => tally;

  return f;
}

console.log(sum(1)(2).toString());
console.assert(sum(1)(2) == 3); // 3
console.assert(sum(5)(-1)(2) == 6); // 6
console.assert(sum(6)(-1)(-2)(-3) == 0); // 0
console.assert(sum(0)(1)(2)(3)(4)(5) == 15); // 15
