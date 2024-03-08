function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();
console.log(user.ref.name); // What's the result?

// A: Will result in an error.
// 'this' evaluated at call time. When called via makeUser() to make 'user,'
// this evaluates to undefined (it is called within the function with no
// object context.)
// Therefore, in the log, user.ref.name tries to access the name property of
// 'undefined.'
