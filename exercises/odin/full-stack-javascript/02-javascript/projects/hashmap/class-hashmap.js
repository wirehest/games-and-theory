export default class HashMap {
  _buckets;

  constructor(capacity = 16, loadFactor = 0.75) {
    this._capacity = capacity;
    this._loadFactor = loadFactor;
    this.#init();
  }

  // hash(key) takes a key and produces a hash code with it
  hash(key) {
    if (typeof key !== 'string') key += '';
    return this.#hashFunction(key);
  }

  // set(key, value) takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value
  set(key, value) {
    let hashKey = this.hash(key);
    hashKey = this.#verifyIndex(hashKey);
    let bucket = this._buckets[hashKey];

    if (this.length() > this._loadFactor * this._capacity) this.#growBuckets;

    if (bucket) console.log('Note: old value was found, will overwrite');
    this._buckets[hashKey] = { key, value };
  }

  // get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
  get(key) {
    let hashKey = this.hash(key);
    hashKey = this.#verifyIndex(hashKey);
    let bucket = this._buckets[hashKey];

    if (bucket.key === key) return bucket.value;
    else return bucket;
  }

  // has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  has(key) {
    let hashKey = this.hash(key);
    hashKey = this.#verifyIndex(hashKey);
    let bucket = this._buckets[hashKey];

    return !!bucket;
  }

  // remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
  remove(key) {
    let hashKey = this.hash(key);
    hashKey = this.#verifyIndex(hashKey);
    let bucket = this._buckets[hashKey];

    if (bucket) {
      this._buckets[hashKey] = null;
      return true;
    } else return false;
  }

  // length() returns the number of stored keys in the hash map.
  length() {
    return this._buckets.filter((value) => value !== null).length;
  }

  // clear() removes all entries in the hash map.
  clear() {
    this._buckets.fill(null);
  }

  // keys() returns an array containing all the keys inside the hash map.
  keys() {
    return this._buckets
      .filter((bucket) => !!bucket)
      .map((bucket) => bucket.key);
  }

  // values() returns an array containing all the values.
  values() {
    return this._buckets.filter((value) => value !== null);
  }

  // entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
  entries() {
    return this._buckets
      .filter((bucket) => !!bucket)
      .map((bucket) => [bucket.key, bucket.value]);
  }

  #init() {
    this._buckets = Array(this._capacity).fill(null);
  }

  #hashFunction(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this._buckets.length;
    }

    return hashCode;
  }

  #growBuckets() {
    this._buckets.concat(Array(this._buckets.length).fill(null));
    this._capacity = this._buckets.length;
    //double then copy
    // If you have implemented your hash map correctly, the capacity of your new hash map will drop well below your load factor and you will notice that the nodes in your hash map are spread much evenly among your buckets.
  }

  #verifyIndex(index) {
    if (index < 0 || index >= this._buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
    return index;
  }
}

// TODO:
// Collision detection;
// Create a HashSet class or factory function that behaves the same as a
// HashMap but only contains keys with no values.
