// In the code below we create new Rabbit, and then try to modify its prototype.
// In the start, we have this code:

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();
console.log(rabbit.eats); // true

// We added one more string (emphasized). What will alert show now?
rabbit = new Rabbit();
Rabbit.prototype = {};
console.log(rabbit.eats);
// A: true.
// Reassignment of prototype won't affect existing objects.

// …And if the code is like this (replaced one line)?
rabbit = new Rabbit();
Rabbit.prototype.eats = false;
console.log(rabbit.eats);
// A: false.
// The same prototype is being referenced. Therefore, changing the value in the
// prototype will be reflected when lookup happens through the proto chain.

// And like this (replaced one line)?
rabbit = new Rabbit();
Rabbit.prototype.eats = true;
delete rabbit.eats;
console.log(rabbit.eats);
// A: true.
// No eats property on rabbit, and delete only works on the current obj.,
// not the prototype. So prototype remains unaffected, and lookup to eats
// still returns true.

// The last variant:
rabbit = new Rabbit();
delete Rabbit.prototype.eats;
console.log(rabbit.eats);
// A: undefined.
// Similar to second case: modifying the property directly will affect
// subsequent lookups through the prototype chain, causing undefined to be
// returned.
