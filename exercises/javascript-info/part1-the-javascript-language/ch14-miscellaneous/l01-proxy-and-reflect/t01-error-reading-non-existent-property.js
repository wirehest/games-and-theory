// Usually, an attempt to read a non-existent property returns undefined.

// Create a proxy that throws an error for an attempt to read of a non-existent
// property instead.

// That can help to detect programming mistakes early.

// Write a function wrap(target) that takes an object target and return a proxy
// that adds this functionality aspect.

// That’s how it should work:

let user = { name: 'John' };

function wrap(target) {
  return new Proxy(target, {
    get(obj, name) {
      if (typeof obj[name] === 'undefined') {
        throw new ReferenceError(`Property doesn't exist: "${name}"`);
      }
      return Reflect.get(obj, name);
    },
  });
}

console.log(user.name); // John
console.log(user.age); // Should be undefined

user = wrap(user);
console.log(user.name); // John
console.log(user.age); // ReferenceError: Property doesn't exist: "age"
