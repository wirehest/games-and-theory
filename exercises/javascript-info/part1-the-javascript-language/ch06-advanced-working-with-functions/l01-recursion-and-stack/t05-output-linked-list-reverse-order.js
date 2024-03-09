// Output a single-linked list from the previous task Output a single-linked
// list in the reverse order.
// Make two solutions: using a loop and using a recursion.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

/** A: Prints the linked list in reverse order using a loop. */
function printReverseLoop(list) {
  let array = [];
  let i = list;

  while (i) {
    array.push(i.value);
    i = i.next;
  }
  array.reverse().forEach((x) => console.log(x));
}

/** A: Prints the linked list in reverse order using recursion. */
function printReverseRecursion(list) {
  if (list.next) printReverseRecursion(list.next);
  console.log(list.value);
}

console.log('Printing linked list elements in reverse via loop:');
printReverseLoop(list);

console.log('Printing linked list elements in reverse via recursion:');
printReverseRecursion(list);
