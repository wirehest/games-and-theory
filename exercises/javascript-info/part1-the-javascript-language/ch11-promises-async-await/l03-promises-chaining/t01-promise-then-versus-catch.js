// Are these code fragments equal? In other words, do they behave the same way
// in any circumstances, for any handler functions?

promise.then(f1).catch(f2);

// Versus:

promise.then(f1, f2);

// A: No. Second fragment only catches errors from the first promise object.
// It will not catch errors during then (e.g., when f1 is called).
// The first fragment will catch all errors because they will pass down the
// chain to catch.
