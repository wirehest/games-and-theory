// Using the if..else construct, write the code which asks: ‘What is the
// “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise –
// output: “You don’t know? ECMAScript!”

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let answer = await rl.question('What is the "official" name of JavaScript? ');

if (answer.toLowerCase() === 'ecmascript') {
  console.log('\nRight!');
} else {
  console.log("\nYou don't know? ECMAScript!");
}

rl.close();
