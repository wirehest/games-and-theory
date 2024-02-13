'use strict';

// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the
// middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
// The array in the process:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

let styles = ['Jazz', 'Blues'];
console.log(`${styles} => elements should be: Jazz, Blues`);

styles.push('Rock-n-Roll');
console.log(`${styles} => elements should be: Jazz, Blues, Rock-n-Roll`);

styles[Math.ceil(styles.length / 2) - 1] = 'Classics';
console.log(`${styles} => elements should be: Jazz, Classics, Rock-n-Roll`);

console.log(styles.shift(), '=> called .shift()');
console.log(`${styles} // elements should be: Classics, Rock-n-Roll`);

styles.unshift('Rap', 'Reggae');
console.log(
  `${styles} // elements should be: Rap, Reggae, Classics, Rock-n-Roll`
);
