import Node from './class-node.js';

export default class LinkedList {
  _size = 0;
  _head = null;
  _tail = null;

  // returns the total number of nodes in the list
  get size() {
    return this._size;
  }

  // returns the first node in the list
  get head() {
    return this._head;
  }

  // returns the last node in the list
  get tail() {
    return this._tail;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    if (this._size === 0) return this._addToEmptyList(value);

    let oldTail = this._tail;
    this._tail = new Node(value);
    oldTail.nextNode = this._tail;
    return ++this._size;
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    if (this._size === 0) return this._addToEmptyList(value);

    let oldHead = this._head;
    this._head = new Node(value, oldHead);
    return ++this._size;
  }

  // called by append()/prepend() when list size = 0
  _addToEmptyList(value) {
    this._head = new Node(value);
    this._tail = this._head;
    return ++this._size;
  }

  // returns the node at the given index
  at(index) {
    let i = 0;
    let targetNode = this._head;

    while (i < index) {
      targetNode = targetNode.nextNode;
      i++;
    }

    return targetNode;
  }

  // removes the last element from the list
  pop() {
    let currentNode = this._head;

    while (true) {
      if (currentNode.nextNode.nextNode === null) {
        let tailValue = currentNode.nextNode.value;

        currentNode.nextNode = null;
        this._tail = currentNode;
        this._size--;

        return tailValue;
      }

      currentNode = currentNode.nextNode;
    }
  }

  // returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    return this._search(value, 'contains');
  }

  // returns the index of the node containing value, or null if not found.
  find(value) {
    return this._search(value, 'find');
  }

  // refactor of common logic between contains() and find()
  _search(value, searchType) {
    if (this._size === 0) return console.log('list is empty');

    let i = 0;
    let currentNode = this._head;

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
    if (this._size === 0) return console.log('list is empty');

    let currentNode = this._head;
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
    let currentNode = this._head;

    if (index >= this._size) {
      return console.log('index exceeds list size, try append()');
    }

    if (index === 0) {
      this.prepend(value);
      return this._size;
    }

    while (i < index - 1) {
      currentNode = currentNode.nextNode;
      i++;
    }

    let newNode = new Node(value, currentNode.nextNode);
    currentNode.nextNode = newNode;

    return ++this._size;
  }

  // removes the node at the given index
  removeAt(index) {
    let i = 0;
    let currentNode = this._head;

    if (this._size === 0) {
      return console.log("can't remove from an empty list");
    }

    if (index >= this._size || index < 0) {
      return console.log('invalid index');
    }

    // catch if index points to last Node
    if (index === this._size - 1) {
      this.pop();

      // do not need to decrement because pop() does this
      return this._this;
    }

    // catch if index points to first Node
    if (index === 0) {
      this._head = currentNode?.nextNode || null;
    }

    // catch if only one element remaining
    if (this._size === 1) {
      this._head = null;
      this._tail = null;
    }

    while (i < index - 1) {
      currentNode = currentNode.nextNode;
      i++;
    }

    let newNextNode = currentNode.nextNode.nextNode || null;
    currentNode.nextNode = newNextNode;

    return --this._size;
  }
}
