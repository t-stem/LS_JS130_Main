class SumOfMultiples {
  static set = Object.freeze([3, 5]);
  
  static to(target) {
    let multiples = [];

    this.set.forEach(setNum => {
      for (let currNum = setNum; currNum < target; currNum += setNum) {
        if (!multiples.includes(currNum)) {
          multiples.push(currNum);
        }
      }
    });

    return multiples.reduce((sum, num) => sum + num, 0);
  }

  constructor(...args) {
    this.set = args.length > 0 ? args : SumOfMultiples.set;
  }

  to(target) {
    return SumOfMultiples.to.call(this, target);
  }
}

module.exports = SumOfMultiples;