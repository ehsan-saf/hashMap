import LinkedList from "./linkedList.js";

export default class HashSet {
  constructor() {
    this.buckets = [];
    this.size = 16;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
    }

    return hashCode;
  }

  set(key) {
    let hashKey = this.hash(key);
    let list = this.buckets[hashKey];
    if (!list) {
      list = new LinkedList();
      list.append(key);
    } else {
      list.updateAddNode(key);
    }
    this.buckets[hashKey] = list;
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
        arr.push(node.key);
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
        arr.push(node.key);
        node = node.next;
      }
    });
    return arr;
  }
}
