'use strict';

let user = {
  name: 'John',
  age: 30,
};

/**
 * A: Returns the number of properties in an object.
 * Ignores symbolic properties
 */
function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(user));
