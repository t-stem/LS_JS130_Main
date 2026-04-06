class Element {
  constructor(datum, nextNode = null) {
    this._datum = datum;
    this._nextNode = nextNode;
  }

  set nextNode(node) {
    this._nextNode = node;
  }

  datum() {
    return this._datum;
  }

  next() {
    return this._nextNode;
  }

  isTail() {
    return this.next() === null;
  }
}

class SimpleLinkedList {
  static isLastNode(node) {
    if (!(node instanceof Element)) return null;

    return node.isTail() === true;
  }

  static fromArray(inputArr) {
    let newList = new SimpleLinkedList();

    if (Array.isArray(inputArr)) {
      let reversedArr = inputArr.slice().reverse();
      reversedArr.forEach(datum => newList.push(datum));
    }
    return newList;
  }
  
  constructor() {
    this.headNode = null;
  }
  
  traverse(callback, nodeSelection) {
    let currNode = this.head();
    if (currNode === null) return;
    
    do {
      let callbackReturn = callback(currNode);
      if (nodeSelection !== undefined && callbackReturn === nodeSelection) return currNode;

      currNode = currNode.next();
    } 
    while (currNode !== null);
  }

  size() {
    let counter = 0;
    let count = () => counter += 1;

    this.traverse(count);

    return counter;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    let head = this.head();
    return head === null ? null : head.datum();
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.traverse(SimpleLinkedList.isLastNode, true);
  }

  push(datum) {
    let newNode = new Element(datum, this.headNode);
    this.headNode = newNode;
  }

  pop() {
    let poppedNode = this.headNode;
    this.headNode = this.headNode.next();
    return poppedNode.datum();
  }

  toArray() {
    let outputArr = [];

    this.traverse(outputArr.push.bind(outputArr));

    return outputArr.map(node => node.datum());
  }

  reverse() {
    let listArr = this.toArray();
    listArr.reverse();

    return SimpleLinkedList.fromArray(listArr);
  }
}

module.exports = {SimpleLinkedList: SimpleLinkedList, Element: Element};