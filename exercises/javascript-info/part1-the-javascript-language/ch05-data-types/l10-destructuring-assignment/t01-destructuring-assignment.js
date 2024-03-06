'use strict';

let user = {
  name: 'John',
  years: 30,
};

/**
 * A: Destructuring assignment that reads:
 * name property into variable name
 * years property into variable age
 * isAdmin into variable isAdmin with default value false
 */
let { name, years: age, isAdmin = false } = user;

console.assert(name === 'John');
console.assert(age === 30);
console.assert(isAdmin === false);
