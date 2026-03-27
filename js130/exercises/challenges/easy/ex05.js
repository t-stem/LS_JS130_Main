class Scrabble {
  static VALUES = Object.freeze({
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  });

  static LOOKUP = {};

  static score = function(word) {
    if (word === null) return 0;

    let cleanWord = Scrabble.clean(word);

    return cleanWord
      .split('')
      .map(char => Scrabble.LOOKUP[char])
      .reduce((sum, value) => sum + value, 0);
  }

  static clean = function(word) {
    return word
      .toUpperCase()
      .replace(/[^A-Z]/g, '');
  }

  constructor(word) {
    this.word = word;
  }

  score() {
    return Scrabble.score(this.word);
  }
}

Object.keys(Scrabble.VALUES).forEach(value => {
  Scrabble.VALUES[value].forEach(letter => {
    Scrabble.LOOKUP[letter] = Number(value);
  })
})

module.exports = Scrabble;