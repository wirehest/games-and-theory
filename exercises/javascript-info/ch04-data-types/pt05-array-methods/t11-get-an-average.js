'use strict';

// Write the function getAverageAge(users) that gets an array of objects with
// property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.
// For instance:

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 29 };

let arr = [john, pete, mary];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

/** A: Returns the average of the 'age' property in an array of objects. */
function getAverageAge(users) {
  return Math.round(
    users.reduce((acc, user) => acc + user.age, 0) / users.length
  );
}

console.assert(getAverageAge(arr) === 28);
