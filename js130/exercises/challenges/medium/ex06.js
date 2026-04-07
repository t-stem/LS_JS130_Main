class CustomSet {
  static isUnique(inputArr) { // FIX: added. Didn't spot from the problem description/test cases that input could be arrays with non-unqiue elements;
    return inputArr.reduce((uniqueElems, elem) => {
      if (!uniqueElems.includes(elem)) {
        uniqueElems.push(elem);
      }
      return uniqueElems; // FIX: callback has to return accumulator
    }, []);
  }

  constructor(inputArr = []) { // FIX: added. Didn't spot that args could be empty;
    this.elements = CustomSet.isUnique(inputArr);
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  contains(value) {
    return this.elements.includes(value);
  }

  isSubset(inputSet) {
    return this.elements.every(element => inputSet.contains(element)); 
  }

  isSame(inputSet) {
    return this.isSubset(inputSet) && inputSet.isSubset(this); // FIX: argument of inputSet.isSubset() should be this rather than this.element (it takes an instance of CustomSet rather than an array as its argument)
  }

  isDisjoint(inputSet) {
    return this.elements.every(element => inputSet.contains(element) === false);
  }

  intersection(inputSet) {
    let intersectionArr = inputSet.elements.reduce((intersection, element) => {
      if (this.contains(element)) {
        intersection.push(element);
      }

      return intersection; // FIX: need to return accumulator
    }, []);

    return new CustomSet(intersectionArr);
  }

  add(value) {
    if (!this.contains(value)) {
      this.elements.push(value);
    }

    return this; // FIX: didn't spot from test cases that add() needs to return the CustomSet instance
  }

  difference(inputSet) {
    let diffArr = this.elements.reduce((difference, element) => {
      if (!inputSet.contains(element)) {
        difference.push(element);
      }
      return difference;
    }, []);

    return new CustomSet(diffArr);
  }

  union(inputSet) {
    let unionArr = this.elements.reduce((union, element) => {
      if (!inputSet.contains(element)) {
        union.push(element);
      }

      return union;
    }, inputSet.elements.slice());

    return new CustomSet(unionArr);
  }
}

module.exports = CustomSet;