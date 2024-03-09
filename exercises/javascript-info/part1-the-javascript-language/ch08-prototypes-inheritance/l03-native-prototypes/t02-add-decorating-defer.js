// Add to the prototype of all functions the method defer(ms), that returns a
// wrapper, delaying the call by ms milliseconds.

/** A: defer wrapper on Function prototype. */
Function.prototype.defer = function (delay = 1000) {
  let self = this;
  // console.log(this);
  return function (...args) {
    // console.log(self, this);
    setTimeout(() => self.apply(this, args), delay);
  };
};

// Here’s an example of how it should work:
function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // shows 3 after 1 second

// Please note that the arguments should be passed to the original function.

let user = {
  firstName: 'Harry',
  sayHi() {
    console.log(`Hello, I'm ${this.firstName}.`);
  },
};

// user.sayHi = user.sayHi.defer(1000);
// user.sayHi();
user.sayHi.defer(2000).bind(user)();
