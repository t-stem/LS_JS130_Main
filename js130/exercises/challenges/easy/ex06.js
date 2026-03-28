const PerfectNumber = {
  calcAliquot(inputInt) {
    let divisors = []
    
    for (let currInt = 1; currInt < inputInt; currInt += 1) {
      if (inputInt % currInt === 0) {
        divisors.push(currInt);
      }
    }

    return divisors.reduce((sum, num) => sum + num, 0);
  },
  
  classify(inputInt) {
    if (inputInt < 0) throw Error('Must be positive.');

    let aliquotSum = this.calcAliquot(inputInt);

    if (aliquotSum > inputInt) return 'abundant';

    if (aliquotSum < inputInt) return 'deficient';

    return 'perfect';
  }
}

module.exports = PerfectNumber;