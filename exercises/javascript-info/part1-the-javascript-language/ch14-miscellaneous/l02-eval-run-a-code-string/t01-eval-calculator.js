// Create a calculator that prompts for an arithmetic expression and returns its
// result.

// There’s no need to check the expression for correctness in this task. Just
// evaluate and return the result.

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const expr = await rl.question('Enter an arithmetic expression to evaluate: ');

console.log(eval(expr));

rl.close();
