'use stict';

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

/** A: Can map an object to values with WeakMap. */
let readDate = new WeakMap();

// Create Date objects:
const readDate0 = new Date(2023, 1, 15);
const readDate1 = new Date(2023, 2, 20);
const readDate2 = new Date(2023, 3, 25);

// Set object to date maps:
readDate.set(messages[0], readDate0);
readDate.set(messages[1], readDate1);
readDate.set(messages[2], readDate2);

// Retrieve read date:
console.log('message[0] read date:', readDate.get(messages[0]));
