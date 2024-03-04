let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);
// Outputs 1. After one resolve/reject fires, subsequent ones are ignored.
