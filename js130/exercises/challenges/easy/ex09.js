let BeerSong = {
  verse(bottleCount) {
    function plural(num) {
      return num === 1 ? '' : 's'
    }

    function lastBottle(numBottles) {
      return numBottles === 0 ? 'no more' : numBottles;
    }

    function sentenceCase(str) {
      if (!str) return str;

      return str[0].toUpperCase() + str.slice(1);
    }

    let bottlePhrase = String(bottleCount);
    let newBottleCount = bottleCount - 1;
    let oneOrIt = bottleCount === 1 ? 'it' : 'one';
    let secondPhrase = `Take ${oneOrIt} down and pass it around, ${lastBottle(newBottleCount)} bottle${plural(newBottleCount)} of beer on the wall.\n`;
    
    if (bottleCount === 0) {
      bottlePhrase = lastBottle(bottleCount);
      secondPhrase = "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    }
    
    let bottleSingPlur = 'bottle' + plural(bottleCount);
    let firstPhrase = `${bottlePhrase} ${bottleSingPlur} of beer on the wall, ${bottlePhrase} ${bottleSingPlur} of beer.\n`;

    return sentenceCase(firstPhrase) + secondPhrase;
  },

  verses(from, to) {
    let verses = '';
    
    for (let bottleCount = from; bottleCount >= to; bottleCount -= 1) {
      let newLine = bottleCount === to ? '' : '\n';
      let verse = this.verse(bottleCount) + newLine;
      verses += verse;
    }

    return verses;
  },

  lyrics() {
    let bottles = 99;
    let lyrics = '';

    do {
      let newLine = bottles === 0 ? '' : '\n';
      let verse = this.verse(bottles) + newLine;
      lyrics += verse;
      bottles -= 1;
    }
    while (bottles >= 0)

    return lyrics;
  }

  
}

module.exports = BeerSong;