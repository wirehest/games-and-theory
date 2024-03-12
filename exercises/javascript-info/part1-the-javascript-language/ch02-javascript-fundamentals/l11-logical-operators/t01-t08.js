// T1: What's the result of OR?
// What is the code below going to output?
console.log(null || 2 || undefined); // Logs 2.

// T2: What's the result of OR'ed alerts?
// What will the code below output?
console.log(console.log(1) || 2 || console.log(3)); // Logs 1, 2.

// T3: What is the result of AND?
// What is this code going to show?
console.log(1 && null && 2); // Logs null.

// T4: What is the result of AND'ed alerts?
// What will this code show?
console.log(console.log(1) && console.log(2)); // Logs 1, 2, undefined

// T5: The result of OR AND OR
// What will the result be?
console.log(null || (2 && 3) || 4); // Logs 3

// T6: Check the range between
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
if (14 <= age && age <= 90) {
}

// T7: Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it
if (!(14 <= age && age <= 90)) {
}

// T8: A question about "if"
// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?
if (-1 || 0) console.log('first'); // Executes (evals to -1)
if (-1 && 0) console.log('second'); // Does not execute (evals to 0)
if (null || (-1 && 1)) console.log('third'); // Executes (evals to 1)
