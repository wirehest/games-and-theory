import Node from './class-node.js';

export default class LinkedList {
  #size = 0;
  #head = null;
  #tail = null;

  // returns the total number of nodes in the list
  get size() {
    return this.#size;
  }

  // returns the first node in the list
  get head() {
    return this.#head;
  }

  // returns the last node in the list
  get tail() {
    return this.#tail;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    if (this.#size === 0) return this.#addToEmptyList(value);

    let oldTail = this.#tail;
    this.#tail = new Node(value);
    oldTail.nextNode = this.#tail;
    return ++this.#size;
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    if (this.#size === 0) return this.#addToEmptyList(value);

    let oldHead = this.#head;
    this.#head = new Node(value, oldHead);
    return ++this.#size;
  }

  // called by append()/prepend() when list size = 0
  #addToEmptyList(value) {
    this.#head = new Node(value);
    this.#tail = this.#head;
    return ++this.#size;
  }

  // returns the node at the given index
  at(index) {
    let i = 0;
    let targetNode = this.#head;

    while (i < index) {
      targetNode = targetNode.nextNode;
      i++;
    }

    return targetNode;
  }

  // removes the last element from the list
  pop() {
    let currentNode = this.#head;

    while (true) {
      if (currentNode.nextNode.nextNode === null) {
        let tailValue = currentNode.nextNode.value;

        currentNode.nextNode = null;
        this.#tail = currentNode;
        this.#size--;

        return tailValue;
      }

      currentNode = currentNode.nextNode;
    }
  }

  // returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    return this.#search(value, 'contains');
  }

  // returns the index of the node containing value, or null if not found.
  find(value) {
    return this.#search(value, 'find');
  }

  // refactor of common logic between contains() and find()
  #search(value, searchType) {
    if (this.#size === 0) return console.log('list is empty');

    let i = 0;
    let currentNode = this.#head;

    while (true) {
      if (currentNode.value === value) {
        return searchType === 'find' ? i : true;
      }

      if (currentNode.nextNode === null) {
        return searchType === 'find' ? null : false;
      }

      currentNode = currentNode.nextNode;
      i++;
    }
  }

  // returns a string of the list's values in the format:
  // '( value ) -> ( value ) -> ( value ) -> null'
  toString() {
    if (this.#size === 0) return console.log('list is empty');

    let currentNode = this.#head;
    let fullString = '';

    while (currentNode.nextNode !== null) {
      fullString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    fullString += `( ${currentNode.value} ) -> null`;
    return fullString;
  }

  // inserts a new node with the provided value at the given index
  insertAt(value, index) {
    let i = 0;
    let currentNode = this.#head;

    if (index > this.#size) {
      return console.log('index exceeds list size, try append()');
    }

    if (index === 0) {
      this.prepend(value);
      return this.#size;
    }

    while (i < index - 1) {
      currentNode = currentNode.nextNode;
      i++;
    }

    let newNode = new Node(value, currentNode.nextNode);
    currentNode.nextNode = newNode;

    return ++this.#size;
  }

  // removes the node at the given index
  removeAt(index) {
    let i = 0;
    let currentNode = this.#head;

    if (this.#size === 0) return console.log("can't remove from an empty list");

    if (index > this.#size) return console.log('index exceeds list size');

    if (index === this.#size - 1) {
      this.pop();
      return this.#size;
    }

    while (i < index - 1) {
      currentNode = currentNode.nextNode;
      i++;
    }

    let newNextNode = currentNode.nextNode.nextNode;
    currentNode.nextNode = newNextNode;

    return --this.#size;
  }
}
