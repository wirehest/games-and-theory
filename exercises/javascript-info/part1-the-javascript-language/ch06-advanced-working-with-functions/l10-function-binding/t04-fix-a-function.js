// The call to askPassword() in the code below should check the password and
// then call user.loginOk/loginFail depending on the answer.

// But it leads to an error. Why?

// Fix the highlighted line for everything to start working right (other lines
// are not to be changed).

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function askPassword(ok, fail) {
  let password = await rl.question('Password? ');
  if (password == 'rockstar') ok();
  else fail();
  rl.close();
}

let user = {
  name: 'John',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

// A: Original callbacks lose this context:
// askPassword(user.loginOk, user.loginFail);
// Only the function code is passed from user to askPassword. Bind to fix:
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
