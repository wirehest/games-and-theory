// The task is a little more complex variant of Fix a function that loses
// "this".

// The user object was modified. Now instead of two functions
// loginOk/loginFail, it has a single function user.login(true/false).

// What should we pass askPassword in the code below, so that it calls
// user.login(true) as ok and user.login(false) as fail?

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

  login(result) {
    console.log(this.name + (result ? ' logged in' : ' failed to log in'));
  },
};

// A: bind accomodates optional arguments after the context.
askPassword(user.login.bind(user, true), user.login.bind(user, false));
