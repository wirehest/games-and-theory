// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is
// an empty line or Esc – show “Canceled”, if it’s another string – then show
// “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

/** A: Login prompt flow. */
async function checkLogin() {
  let userName = await rl.question("Who's there? ");

  if (userName.toLowerCase() === 'admin') {
    let password = await rl.question('Password? ');

    if (password === 'TheMaster') {
      console.log('Welcome!');
    } else if (password === '' || password === '\u001b') {
      console.log('Canceled.');
    } else {
      console.log('Wrong password.');
    }
  } else if (userName === '' || userName === '\u001b') {
    console.log('Canceled.');
  } else {
    console.log("I don't know you.");
  }

  rl.close();
}

checkLogin();
