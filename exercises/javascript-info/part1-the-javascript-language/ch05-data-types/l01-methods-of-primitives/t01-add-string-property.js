// Consider the following code:

let str = 'Hello';

str.test = 5;

console.log(str.test);

// What do you think, will it work? What will be shown?

// A: An error. ECMA spec-wise, JS uses a special object wrapper to allow
// methods on primitives. The special wrapper is destroyed immediately after
// use. Any property assigned on a primitive will be destroyed together with the
// object wrapper.
// This can be seen in non-strict mode, where the assignment to str.test appears
// to be successful, but trying to acess the property afterwards returns
// undefined. In strict mode though, an error is thrown immediately.
