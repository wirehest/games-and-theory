// Write a loop which prompts for a number greater than 100. If the visitor
// enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number
// greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to
// implement a special handling for a non-numeric input in this task.

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

while (true) {
  let answer = await rl.question('Enter a number > 100: ');
  if (+answer > 100) break;
  console.log('Enter again.');
}

rl.close();
