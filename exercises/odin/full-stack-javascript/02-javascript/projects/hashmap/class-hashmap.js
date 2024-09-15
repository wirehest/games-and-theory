/**
 * Hash Map class.
 */
import LinkedList from './class-linked-list.js';

export default class HashMap {
  #nodeMode;

  constructor(capacity = 16, loadFactor = 0.75, nodeMode = 'key-value') {
    this.#nodeMode = nodeMode;
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.hashTable = Array(this.capacity).fill(null);
  }

  /** Hashes provided key into an index. */
  hash(key) {
    if (typeof key !== 'string') key += '';
    let index = this.#hashFunction(key);
    if (this.#verifyIndex(index)) return index;
    throw new Error('Trying to access invalid index');
  }

  /** Assigns key and value to a bucket, if key exists, overwrites. */
  set(key, value) {
    let index = this.hash(key);
    let bucket = this.hashTable[index];

    if (bucket !== null) {
      if (bucket.containsKey(key)) {
        console.warn(`Note: old value found for key: ${key}, will overwrite.`);
        let bucketIndex = bucket.findKey(key);
        bucket.removeAt(bucketIndex);
        bucket.insertAt(key, value, bucketIndex);
      } else {
        bucket.append(key, value);
      }
    } else {
      let linkedList = this.newLinkedList();
      linkedList.append(key, value);
      this.hashTable[index] = linkedList;
    }

    // Doubles bucket capacity and loads previous data into it.
    if (this.length() > this.loadFactor * this.capacity) {
      let currentEntries = this.entries();

      this.initHashTable([...Array(this.hashTable.length * 2).fill(null)]);
      this.capacity = this.hashTable.length;

      for (let [key, value] of currentEntries) {
        this.set(key, value);
      }
    }

    return this.hashTable[index];
  }

  /** Returns the value assigned to a key. */
  get(key) {
    let index = this.hash(key);
    let bucket = this.hashTable[index];
    let bucketIndex = bucket.findKey(key);

    if (bucketIndex !== null) {
      return bucket.at(bucketIndex).value;
    } else return bucketIndex;
  }

  /** Returns true/false based on whether the key maps to a valid index. */
  has(key) {
    let index = this.hash(key);
    let bucket = this.hashTable[index];
    return !!bucket;
  }

  /**
   * If the given key is in the hash map, removes the entry with that key
   * and returns true. If the key isn’t in the hash map, returns false.
   */
  remove(key) {
    let index = this.hash(key);
    let bucket = this.hashTable[index];

    if (bucket) {
      this.hashTable[index] = null;
      return true;
    }
    return false;
  }

  /** Returns the number of keys in the hash table. */
  length() {
    return this.hashTable
      .filter((bucket) => bucket !== null)
      .reduce((acc, bucket) => acc + bucket.size, 0);
  }

  /** Clears all keys in the hash table. */
  clear() {
    this.hashTable.fill(null);
  }

  /** Returns an array containing all the keys. */
  keys() {
    let entries = this.entries();
    return entries.map((node) => node[0]);
  }

  /** Returns an array containing all the values. */
  values() {
    let entries = this.entries();
    return entries.map((node) => node[1]);
  }

  /** Returns an array that contains each key, value pair. */
  entries() {
    return this.hashTable
      .filter((bucket) => !!bucket)
      .reduce((acc, bucket) => (acc = acc.concat(bucket.entries())), []);
  }

  newLinkedList() {
    return new LinkedList(this.#nodeMode);
  }

  initHashTable(array) {
    this.hashTable = array;
  }

  #hashFunction(key) {
    let hashCode = 0;
    const primeNumber = 97;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this.hashTable.length;
    }

    return hashCode;
  }

  #verifyIndex(index) {
    return index < 0 || index >= this.hashTable.length ? false : true;
  }
}
