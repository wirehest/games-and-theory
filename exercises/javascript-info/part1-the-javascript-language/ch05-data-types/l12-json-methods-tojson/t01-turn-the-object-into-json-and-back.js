'use strict';

let user = {
  name: 'John Smith',
  age: 35,
};

console.log(typeof user, user);

/** A: Turns user into JSON. */
let userToJson = JSON.stringify(user);
console.log(typeof userToJson, userToJson);

/** Parses userJson back into an object. */
let userFromJson = JSON.parse(userToJson);
console.log(typeof userFromJson, userFromJson);
