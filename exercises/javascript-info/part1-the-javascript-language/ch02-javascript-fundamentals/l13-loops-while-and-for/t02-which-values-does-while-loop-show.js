// For every loop iteration, write down which value it outputs and then
// compare it with the solution.

// Both loops alert the same values, or not?

// The prefix form ++i:
{
  let i = 0;
  while (++i < 5) console.log(i); // Logs 1, 2, 3, 4
}

// The postfix form i++
{
  let i = 0;
  while (i++ < 5) console.log(i); // Logs 1, 2, 3, 4, 5
}
