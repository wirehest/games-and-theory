'use strict';

// Write the function sortByAge(users) that gets an array of objects with the
// age property and sorts them by age.
// For instance:

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let arr = [pete, john, mary];
sortByAge(arr);

// now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

/** A: Sorts arr users by the age property of the sub-objects. */
function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

console.assert(arr[0].name === 'John');
console.assert(arr[1].name === 'Mary');
console.assert(arr[2].name === 'Pete');
