// Using if..else, write the code which gets a number via prompt and then shows
// in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let answer = await rl.question('Input a number: ');

if (Number(answer) > 0) {
  console.log(`${answer} > 0: 1\n`);
} else if (answer < 0) {
  console.log(`${answer} < 0: -1\n`);
} else {
  console.log(`${answer} === 0: 0\n`);
}

rl.close();
