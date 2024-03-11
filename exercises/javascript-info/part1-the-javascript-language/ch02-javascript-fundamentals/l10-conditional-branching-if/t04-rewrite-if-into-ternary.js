// Rewrite this if using the conditional operator '?':

{
  let result;

  if (a + b < 4) {
    result = 'Below';
  } else {
    result = 'Over';
  }
}

// A: Rewritten with ternary.
let result = a + b < 4 ? 'Below' : 'Over';
