// What do you think? Will the .catch trigger? Explain your answer.

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error('Whoops!');
  }, 1000);
}).catch(console.log);

// A: No. The error will throw after the promise chain is exited due to
// setTimeout.
