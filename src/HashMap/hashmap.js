import LinkedList from "./linkedList.js";

export default class HashMap {
  constructor() {
    this.buckets = [];
    this.capacity = 16;
    this.loadFactor = 0.75;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key);
    this.indexInRange(index);
    let count = this.length();
    if (count >= this.capacity * this.loadFactor) {
      this.resize(this.capacity * 2);
    }
    let list = this.buckets[index];
    if (!list) {
      list = new LinkedList();
      list.append(key, value);
    } else {
      list.updateAddNode(key, value);
    }
    this.buckets[index] = list;
  }

  get(key) {
    let index = this.hash(key);
    this.indexInRange(index);
    let list = this.buckets[index];
    if (list) {
      return list.getValue(key);
    } else {
      return null;
    }
  }

  has(key) {
    let hashKey = this.hash(key);
    let list = this.buckets[hashKey];
    if (list) {
      return list.contains(key);
    } else {
      return false;
    }
  }

  remove(key) {
    let hashKey = this.hash(key);
    let list = this.buckets[hashKey];
    let result = false;
    if (list) {
      return list.removeAt(key);
    } else {
      return false;
    }
  }

  length() {
    let count = 0;
    this.buckets.forEach((list) => {
      if (list) {
        count += list.size();
      }
    });
    return count;
  }

  clear() {
    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = null;
    }
  }

  keys() {
    let arr = [];
    this.buckets.forEach((list) => {
      let node = list.headNode;
      while (node) {
        arr.push(node.pair.key);
        node = node.next;
      }
    });
    return arr;
  }

  values() {
    let arr = [];
    this.buckets.forEach((list) => {
      let node = list.headNode;
      while (node) {
        arr.push(node.pair.value);
        node = node.next;
      }
    });
    return arr;
  }

  entries() {
    let arr = [];
    this.buckets.forEach((list) => {
      let node = list.headNode;
      while (node) {
        arr.push([node.pair.key, node.pair.value]);
        node = node.next;
      }
    });
    return arr;
  }

  indexInRange(index) {
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }
  }

  resize(newCapacity) {
    console.log(this);
    const oldBuckets = this.buckets;
    this.buckets = [];
    this.capacity = newCapacity;
    console.log(this);

    for (const list of oldBuckets) {
      if (list) {
        this.set(list.key, list.value);
      }
    }
  }
}
