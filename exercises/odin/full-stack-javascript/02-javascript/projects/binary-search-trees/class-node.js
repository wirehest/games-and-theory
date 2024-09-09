export default class Node {
  _left = null;
  _right = null;

  constructor(value) {
    this._data = value;
  }

  set data(value) {
    this._data = value;
    return this;
  }

  get data() {
    return this._data;
  }

  setLeft(node) {
    this._left = node;
    return this;
  }

  setRight(node) {
    this._right = node;
    return this;
  }
}
