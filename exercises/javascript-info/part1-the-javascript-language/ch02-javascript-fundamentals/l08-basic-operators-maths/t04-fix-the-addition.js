import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default
// prompt values).
// Why? Fix it. The result should be 3.

// let a = prompt('First number?', 1);
// let b = prompt('Second number?', 2);

let a = (await rl.question('First number? ')) || '1';
let b = (await rl.question('Second number? ')) || '2';

console.log(`a + b = ${a + b}`); // Treats a and b as strings.
console.log(`+a + +b = ${+a + +b}`); // Converts a and b to numbers then adds.

rl.close();
