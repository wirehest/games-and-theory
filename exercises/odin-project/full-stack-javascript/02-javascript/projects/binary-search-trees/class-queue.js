export default class Queue {
  length = 0;
  head = null;
  tail = null;

  constructor(value) {
    if (value !== null) this.enqueue(value);
  }

  enqueue(value) {
    let newNode = new QueueElement(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return ++this.length;
  }

  dequeue() {
    let element = this.head.data;

    if (this.length === 0) throw new Error('Queue is empty');

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    --this.length;
    return element;
  }
}

class QueueElement {
  next = null;

  constructor(value) {
    this.data = value;
  }
}
