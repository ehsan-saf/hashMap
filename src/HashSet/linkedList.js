class Node {
  constructor(key, value, next = null) {
    this.pair = {
      key: key,
      value: value,
    };
    this.next = next;
  }
}

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(key, value) {
    let node = new Node(key, value);
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

  getValue(key) {
    let node = this.headNode;
    let result = null;
    while (node) {
      if (node.pair.key == key) {
        result = node.pair.value;
        break;
      }
      node = node.next;
    }
    return result;
  }

  contains(key) {
    let node = this.headNode;
    let hasValue = false;
    while (node) {
      if (node.pair.key === key) {
        hasValue = true;
        break;
      }
      node = node.next;
    }
    return hasValue;
  }

  find(key) {
    let node = this.headNode;
    let isFound = false;
    let index = 0;
    while (node) {
      if (node.pair.key === value) {
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
    if (this.headNode.pair.key === key) {
      this.headNode = this.headNode.next;
      hasRemoved = true;
    } else {
      let pre = this.headNode.next;
      let currentNode = this.headNode.next.next;
      while (currentNode) {
        if (currentNode.pair.key === key) {
          let nextTemp = currentNode.next;
          pre.next = nextTemp;
          break;
        }
        pre = currentNode;
        currentNode = currentNode.next;
      }
      if (!hasRemoved && this.headNode.next.pair.key === key) {
        this.headNode.next = null;
        hasRemoved = true;
      }
    }
    return hasRemoved;
  }

  updateAddNode(key, value) {
    let node = this.headNode;
    while (node) {
      if (node.pair.key === key) {
        node.pair.value = value;
        break;
      } else if (node.next === null) {
        node.next = new Node(key, value);
        break;
      }
      node = node.next;
    }
  }
}
