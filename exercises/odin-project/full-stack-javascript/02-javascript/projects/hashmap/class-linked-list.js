/**
 * Linked List implementation for the Hash Map.
 */
export default class LinkedList {
  _size = 0;
  _head = null;
  _tail = null;
  #nodeMode = null;

  constructor(nodeMode) {
    this.#nodeMode = nodeMode;
  }

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
  append(key, value) {
    if (this._size === 0) return this.#addToEmptyList(key, value);

    let oldTail = this._tail;
    this._tail = this.#newNode(key, value);
    oldTail.nextNode = this._tail;
    return ++this._size;
  }

  // adds a new node containing value to the start of the list
  prepend(key, value) {
    if (this._size === 0) return this.#addToEmptyList(key, value);

    let oldHead = this._head;
    this._head = this.#newNode(key, value, oldHead);
    return ++this._size;
  }

  // called by append()/prepend() when list size = 0
  #addToEmptyList(key, value) {
    this._head = this.#newNode(key, value);
    this._tail = this._head;
    return ++this._size;
  }

  // returns the node at the given index
  at(index) {
    let i = 0;
    let currentNode = this._head;

    while (i < index) {
      currentNode = currentNode.nextNode;
      i++;
    }

    return currentNode;
  }

  // refactor of common logic between contains() and find()
  _search(searchString, searchType) {
    if (this._size === 0) return console.log('list is empty');

    let i = 0;
    let currentNode = this._head;

    if (['containsKey', 'findKey'].includes(searchType)) {
      while (true) {
        if (currentNode.key === searchString) {
          return searchType === 'findKey' ? i : true;
        }
        if (currentNode.nextNode === null) {
          return searchType === 'findKey' ? null : false;
        }

        currentNode = currentNode.nextNode;
        i++;
      }
    }

    if (['contains', 'find'].includes(searchType)) {
      while (true) {
        if (currentNode.value === searchString) {
          return searchType === 'find' ? i : true;
        }

        if (currentNode.nextNode === null) {
          return searchType === 'find' ? null : false;
        }

        currentNode = currentNode.nextNode;
        i++;
      }
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
  insertAt(key, value, index) {
    let i = 0;
    let currentNode = this._head;

    if (index > this._size) {
      return console.log('index exceeds list size, try append()');
    }

    if (index === 0) {
      this.prepend(key, value);
      return this._size;
    }

    while (i < index - 1) {
      currentNode = currentNode.nextNode;
      i++;
    }

    let newNode = this.#newNode(key, value, currentNode.nextNode);
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

    // catch if only one element remaining
    if (this._size === 1) {
      this._head = null;
      this._tail = null;
      return --this._size;
    }

    // catch if index points to last Node
    if (index === this._size - 1) {
      this.pop();

      // do not need to decrement because pop() does this
      return this._size;
    }

    // catch if index points to first Node
    if (index === 0) {
      this._head = currentNode?.nextNode || null;
    }

    while (i < index - 1) {
      currentNode = currentNode.nextNode;
      i++;
    }

    let newNextNode = currentNode.nextNode.nextNode || null;
    currentNode.nextNode = newNextNode;

    return --this._size;
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

  // methods for hashmap project
  containsKey(key) {
    return this._search(key, 'containsKey');
  }

  findKey(key) {
    return this._search(key, 'findKey');
  }

  entries() {
    if (this._size === 0) return;
    let currentNode = this._head;

    let data = [];
    while (true) {
      switch (this.#nodeMode) {
        case 'key-only':
          data.push([currentNode.key]);
          break;
        case 'key-value':
          data.push([currentNode.key, currentNode.value]);
          break;
        default:
          throw new Error('Invalid node mode.');
      }

      if (currentNode.nextNode !== null) currentNode = currentNode.nextNode;
      else break;
    }

    return data;
  }

  #newNode(key, value, nextNode = null) {
    switch (this.#nodeMode) {
      case 'key-only':
        return { key: key, nextNode: nextNode };
      case 'key-value':
        return { key: key, value: value, nextNode: nextNode };
      default:
        throw new Error('Invalid node mode.');
    }
  }
}
