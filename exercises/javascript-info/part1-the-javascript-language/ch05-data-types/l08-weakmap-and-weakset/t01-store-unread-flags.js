'use strict';

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

/** A: Use a WeakSet to track read-status of messages. */
let readMessages = new WeakSet();

// Add messages to the WeakSet when they're read:
readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[2]);

// Check whether message has been read using has():
console.log(`readMessages.has(messages[0]): ${readMessages.has(messages[0])}`);

// When the original message is deleted, the object will be garbage-collected
// from the WeakSet:
console.log('messages obj:\n', messages);
messages.splice(0, 1);
console.log('messages obj after deleting first message:\n', messages);
