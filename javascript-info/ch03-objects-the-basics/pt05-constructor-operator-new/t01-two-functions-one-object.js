'use strict';

let myObject = { name: 'Puawl' };

function A() {
  return myObject;
}
function B() {
  return myObject;
}

let a = new A();
let b = new B();

console.log(`a == b: ${a == b}`); // true
console.log(`a === b: ${a === b}`); // strict equality; true
