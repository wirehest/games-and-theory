// Add to the prototype of all functions the method defer(ms), that runs the
// function after ms milliseconds.

/** A: delay method added to Function prototype. */
Function.prototype.defer = function (delay = 1000) {
  setTimeout(this, delay);
};

// After you do it, such code should work:
function f() {
  console.log('Hello!');
}

f.defer(1000); // shows "Hello!" after 1 second
