/* 
Compare the two code fragments.
The first one uses finally to execute the code after try...catch:

try {
  work work
} catch (err) {
  handle errors
} finally {
  cleanup the working space
}

The second fragment puts the cleaning right after try...catch:

try {
  work work
} catch (err) {
  handle errors
}
cleanup the working space

We definitely need the cleanup after the work, doesn’t matter if there was an
error or not. Is there an advantage here in using finally or both code
fragments are equal? If there is such an advantage, then give an example when
it matters.

A: Code fragments not equal. Code in the finally block guaranteed to run
regardless of the outcome (successful try or error caught). If cleanup code
is outside try..catch..finally, then it will only run if try and catch are
coded to allow it (e.g., no jumps out, like a return).
One advantage in using the finally block is if local variables are declared
within the try..catch..except block and need to be used during cleanup.
*/

function tryCatch1() {
  try {
    return 1;
  } finally {
    // Will print regardless of the outcome.
    console.log('tryCatch1 Cleanup: log from finally block.');
  }
}

function tryCatch2() {
  try {
    return 1;
  } finally {
    /* Empty finally block */
  }
  // Will not print due to the return 'jump.'
  console.log('tryCatch2 Cleanup: log from outside the try...finally block.');
}

tryCatch1();
tryCatch2();
