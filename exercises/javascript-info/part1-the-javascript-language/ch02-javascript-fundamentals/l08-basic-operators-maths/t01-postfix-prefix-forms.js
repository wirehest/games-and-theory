// What are the final values of all variables a, b, c and d after the code
// below?

let a = 1;
let b = 1;

let c = ++a; // a = 2, b = 1, c = 2
let d = b++; // a = 2, b = 2, c = 2, d = 1

console.assert(a === 2);
console.assert(b === 2);
console.assert(c === 2);
console.assert(d === 1);
