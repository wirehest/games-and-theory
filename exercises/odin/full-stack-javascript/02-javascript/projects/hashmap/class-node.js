export default class Node {
  constructor(key = null, value = null, nextNode = null) {
    this._key = key;
    this._value = value;
    this._nextNode = nextNode;
  }

  set key(newKey) {
    this._key = newKey;
  }

  get key() {
    return this._key;
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
