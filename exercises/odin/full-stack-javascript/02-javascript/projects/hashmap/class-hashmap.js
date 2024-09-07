import LinkedList from './class-linked-list.js';

export default class HashMap {
  _buckets;

  constructor(capacity = 16, loadFactor = 0.75) {
    this._capacity = capacity;
    this._loadFactor = loadFactor;
    this.#init();
  }

  // hash(key) takes a key and produces a hash code with it.
  hash(key) {
    if (typeof key !== 'string') key += '';
    return this.#hashFunction(key);
  }

  // Assigns key and value to a bucket, if key exists, value is overwritten.
  set(key, value) {
    let hashKey = this.hash(key);
    hashKey = this.#verifyIndex(hashKey);
    let bucket = this._buckets[hashKey];

    if (bucket !== null) {
      if (bucket.containsKey(key)) {
        console.log(`Note: old value found for key: ${key}, will overwrite`);
        let index = bucket.findKey(key);
        bucket.removeAt(index);
        bucket.insertAt(key, value, index);
      } else {
        bucket.append(key, value);
      }
    } else {
      let linkedList = new LinkedList();

      linkedList.append(key, value);
      this._buckets[hashKey] = linkedList;
    }

    // Check load factor and call growBuckets() if necessary.
    if (this.length() > this._loadFactor * this._capacity) this.#growBuckets();
  }

  // Returns the value assigned to a key.
  get(key) {
    let hashKey = this.hash(key);
    hashKey = this.#verifyIndex(hashKey);
    let bucket = this._buckets[hashKey];

    let index = bucket.findKey(key);

    if (index !== null) {
      return bucket.at(index).value;
    } else return index;
  }

  // Returns true or false based on whether the key is in the hash map.
  has(key) {
    let hashKey = this.hash(key);
    hashKey = this.#verifyIndex(hashKey);
    let bucket = this._buckets[hashKey];

    return !!bucket;
  }

  // If the given key is in the hash map, removes the entry with that key
  // and returns true. If the key isn’t in the hash map, returns false.
  remove(key) {
    let hashKey = this.hash(key);
    hashKey = this.#verifyIndex(hashKey);
    let bucket = this._buckets[hashKey];

    if (bucket) {
      this._buckets[hashKey] = null;
      return true;
    } else return false;
  }

  // Returns the number of stored keys in the hash map.
  length() {
    return this._buckets
      .filter((bucket) => bucket !== null)
      .reduce((acc, bucket) => acc + bucket.size, 0);
  }

  // Removes all entries in the hash map.
  clear() {
    this._buckets.fill(null);
  }

  // Returns an array containing all the keys inside the hash map.
  keys() {
    let entries = this._buckets
      .filter((bucket) => !!bucket)
      .reduce((acc, bucket) => (acc = acc.concat(bucket.entries())), []);

    return entries.map((node) => node[0]);
  }

  // Returns an array containing all the values.
  values() {
    let entries = this._buckets
      .filter((bucket) => !!bucket)
      .reduce((acc, bucket) => (acc = acc.concat(bucket.entries())), []);

    return entries.map((node) => node[1]);
  }

  // Returns an array that contains each key, value pair.
  entries() {
    return this._buckets
      .filter((bucket) => !!bucket)
      .reduce((acc, bucket) => (acc = acc.concat(bucket.entries())), []);
  }

  // Called from constructor to initialize buckets array.
  #init() {
    this._buckets = Array(this._capacity).fill(null);
  }

  #hashFunction(key) {
    let hashCode = 0;
    const primeNumber = 97;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this._buckets.length;
    }

    return hashCode;
  }

  // Doubles bucket capacity, then re-sets all key value pairs into
  // the new, larger bucket.
  #growBuckets() {
    let currentEntries = this.entries();

    this._buckets = [...Array(this._buckets.length * 2).fill(null)];
    this._capacity = this._buckets.length;

    for (let [key, value] of currentEntries) {
      this.set(key, value);
    }
  }

  // Checks that the index is valid.
  #verifyIndex(index) {
    if (index < 0 || index >= this._buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
    return index;
  }
}

// TODO:
// Create a HashSet class or factory function that behaves the same as a
// HashMap but only contains keys with no values.
