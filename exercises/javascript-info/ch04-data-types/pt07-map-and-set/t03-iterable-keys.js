'use strict';

// We’d like to get an array of map.keys() in a variable and then apply
// array-specific methods to it, e.g. .push.
// But that doesn’t work:

let map = new Map();
map.set('name', 'John');
let keys = map.keys();

// // Error: keys.push is not a function
// keys.push('more');
// Why? How can we fix the code to make keys.push work?

/** A: Keys is an iterator, not an array. Convert it to an array first. */
console.log(Array.isArray(keys), keys); // false [Map Iterator] { 'name' }

keys = [...keys]; // or keys = Array.from(map.keys());
keys.push('more');

console.log(Array.isArray(keys), keys); // true [ 'name', 'more' ]
