export default class Node {
  constructor(value = null, nextNode = null) {
    this._value = value;
    this._nextNode = nextNode;
  }

  set value(newValue) {
    this._value = newValue;
  }

  get value() {
    return this._value;
  }

  set nextNode(newNextNode) {
    this._nextNode = newNextNode;
  }

  get nextNode() {
    return this._nextNode;
  }
}
