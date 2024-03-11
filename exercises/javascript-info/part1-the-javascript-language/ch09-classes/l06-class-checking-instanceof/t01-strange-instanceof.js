// In the code below, why does instanceof return true? We can easily see that a
// is not created by B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B); // true

// A: The line "A.prototype = B.prototype = {};" sets both constructor
// functions share the same prototype: the empty object. instanceof
// Checks if B's prototype is in a's prototype chain; a, constructed by A(),
// which had its prototype set to the same empty object as B().
