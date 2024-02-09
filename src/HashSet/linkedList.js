class Node {
  constructor(key, next = null) {
    (this.key = key), (this.next = next);
  }
}

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(key) {
    let node = new Node(key);
    if (this.headNode === null) {
      this.headNode = node;
    } else {
      this.tail().next = node;
    }
  }

  head() {
    return this.headNode;
  }

  tail() {
    let node = this.headNode;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  size() {
    let count = 0;
    if (this.headNode) {
      count += 1;
      let node = this.headNode;
      while (node.next) {
        count += 1;
        node = node.next;
      }
    }
    return count;
  }

  at(index) {
    let node = this.headNode;
    let currentIndex = 0;
    let targetNode = null;
    while (node) {
      if (currentIndex === index) {
        targetNode = node;
        break;
      }
      node = node.next;
      currentIndex += 1;
    }
    return targetNode;
  }

  pop() {
    this.at(this.size() - 2).next = null;
  }

  contains(key) {
    let node = this.headNode;
    let hasKey = false;
    while (node) {
      if (node.key === key) {
        hasKey = true;
        break;
      }
      node = node.next;
    }
    return hasKey;
  }

  find(key) {
    let node = this.headNode;
    let isFound = false;
    let index = 0;
    while (node) {
      if (node.key === key) {
        isFound = true;
        break;
      }
      index++;
      node = node.next;
    }
    return isFound ? index : null;
  }

  toString() {
    let node = this.headNode;
    let result = "";
    while (node) {
      result += ` ( ${node.value} ) -> `;
      node = node.next;
    }
    result += " null";
    console.log(result);
  }

  removeAt(key) {
    let hasRemoved = false;
    if (this.headNode.key === key) {
      this.headNode = this.headNode.next;
      hasRemoved = true;
    } else {
      let pre = this.headNode.next;
      let currentNode = this.headNode.next.next;
      while (currentNode) {
        if (currentNode.key === key) {
          let nextTemp = currentNode.next;
          pre.next = nextTemp;
          break;
        }
        pre = currentNode;
        currentNode = currentNode.next;
      }
      if (!hasRemoved && this.headNode.next.key === key) {
        this.headNode.next = null;
        hasRemoved = true;
      }
    }
    return hasRemoved;
  }
}
