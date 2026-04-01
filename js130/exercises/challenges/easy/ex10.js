class Series {
  constructor(series) {
    this.series = series;
  }
  
  slices(len) {
    if (len > this.series.length) throw Error();

    let subsets = []
    let limit = this.series.length - len;

    for (let currDigit = 0; currDigit <= limit; currDigit += 1) {
      let subset = this.series
        .slice(currDigit, currDigit + len)
        .split('')
        .map(digit => Number(digit));

      subsets.push(subset);
    }

    return subsets;
  }
}

module.exports = Series;