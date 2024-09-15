/**
 * Hash Set class.
 * Based on Hash Map, and reuses several Hash Map methods except for
 * set(), which has been composed for this class.
 */
import HashMap from './class-hashmap.js';

export default class HashSet {
  #nodeMode = 'key-only';

  constructor(capacity, loadFactor) {
    this.hashMap = new HashMap(capacity, loadFactor, this.#nodeMode);
    this.hashTable = this.hashMap.hashTable;
    this.loadFactor = this.hashMap.loadFactor;
    this.capacity = this.hashMap.capacity;
  }

  hash(key) {
    return this.hashMap.hash(key);
  }

  set(key) {
    let index = this.hash(key);
    let bucket = this.hashTable[index];

    if (bucket !== null) {
      if (bucket.containsKey(key)) {
        console.warn(`Note: ${key} already in the Hash Set.`);
        let bucketIndex = bucket.findKey(key);
        bucket.removeAt(bucketIndex);
        bucket.insertAt(key, null, bucketIndex);
      } else {
        bucket.append(key, null);
      }
    } else {
      let linkedList = this.hashMap.newLinkedList();
      linkedList.append(key);
      this.hashTable[index] = linkedList;
    }

    // Doubles bucket capacity and loads previous data into it.
    if (this.length() > this.loadFactor * this.capacity) {
      let currentEntries = this.keys();

      this.initHashTable([...Array(this.hashTable.length * 2).fill(null)]);
      this.hashTable = this.hashMap.hashTable;
      this.capacity = this.hashTable.length;

      for (let key of currentEntries) {
        this.set(key);
      }
    }

    return this.hashTable[index];
  }

  has(key) {
    return this.hashMap.has(key);
  }

  remove(key) {
    return this.hashMap.remove(key);
  }

  length() {
    return this.hashMap.length();
  }

  clear() {
    return this.hashMap.clear();
  }

  keys() {
    return this.hashMap.keys();
  }

  initHashTable(array) {
    return this.hashMap.initHashTable(array);
  }
}
