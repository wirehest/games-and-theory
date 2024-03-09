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

/** A: Uses a loop to traverse the linked list. */
function printListLoop(list) {
  let i = list;
  while (i) {
    console.log(i.value);
    i = i.next;
  }
}

/** A: Uses recursion to traverse the linked list. */
function printListRec(list) {
  console.log(list.value);
  if (list.next) printListRec(list.next);
}

console.log('Printing linked list elements via loop:');
printListLoop(list);

console.log('Printing linked list elements via recursion:');
printListRec(list);
