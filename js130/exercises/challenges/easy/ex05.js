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

  static buildLookup() { // IMPROVEMENT: added this code as static function rather than separate code outside class
    let lookup = {};
    
    Object.keys(Scrabble.VALUES).forEach(value => {
      Scrabble.VALUES[value].forEach(letter => {
        lookup[letter] = Number(value);
      });
    });

    return Object.freeze(lookup);
  }

  static LOOKUP = Scrabble.buildLookup(); // IMPROVEMENT: changed to function call

  static score(word) { // IMPROVEMENT: removed function expression syntax for consistency
    if (!word) return 0; // IMPROVEMENT: instead of word === null, cover all falsy values

    let cleanWord = Scrabble.clean(word);

    return cleanWord
      .split('')
      .map(char => Scrabble.LOOKUP[char])
      .reduce((sum, value) => sum + value, 0);
  }

  static clean(word) { // IMPROVEMENT: removed function expression syntax for consistency
    return word
      .toUpperCase()
      .replace(/[^A-Z]/g, '');
  }

  constructor(word) {
    this.word = word || ''; // IMPROVEMENT: adden normalization of word using ||
  }

  score() {
    return Scrabble.score(this.word);
  }
}

module.exports = Scrabble;