// Below you can find the “rethrow” example. Rewrite it using async/await
// instead of .then/catch.

// And get rid of the recursion in favour of a loop in demoGithubUser: with
// async/await that becomes easy to do.

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status === 200) return response.json();
  throw new HttpError(response);
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  let user;

  while (true) {
    let name = (await rl.question('Enter a name? ')) || 'iliakan';

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      console.log(`Full name: ${user.name}.`);
      rl.close();
      return user;
    } catch (error) {
      if (error instanceof HttpError && error.response.status === 404) {
        console.log('No such user, please reenter.');
      } else {
        throw error;
      }
    }
  }
}

demoGithubUser();
