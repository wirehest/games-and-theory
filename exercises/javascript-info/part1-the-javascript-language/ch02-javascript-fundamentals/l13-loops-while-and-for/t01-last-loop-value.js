// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  console.log(i--);
}

// A: Last log will be i = 1. When i is decremented, while (0) will be
// interpreted as while (false), stopping the loop.
