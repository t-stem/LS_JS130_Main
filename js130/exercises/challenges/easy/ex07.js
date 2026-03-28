class Octal {
  constructor(numStr) {
    this.numStr = numStr;
  }

  isValid() {
    return !/[^0-7]+$/.test(this.numStr); // IMPROVEMENT: simplified if logic, addition of +$ in regex treats empty strings as invalid (requires at least once char)
  }

  toDecimal() {
    if (!this.isValid()) return 0;

    let octArr = this.numStr.split('').reverse();

    let decArr = octArr.map((num, index) => {
      return Number(num) * (8 ** index);
    });

    return decArr.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = Octal;