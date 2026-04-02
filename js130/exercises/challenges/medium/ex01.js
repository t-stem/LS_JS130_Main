const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // CORRECTION: when exporting Diamond, the makeDiamond method closes over ALPHABET from the outer scope. Therefore, ALPHABET will be available to the method in the destination file and doesn't need to be exported separatedly

const Diamond = {
  makeDiamond(char) {
    let charIndex = ALPHABET.indexOf(char);

    let diamondWidth = charIndex * 2 + 1;
    let upperTriangle = [];

    for (let lineIndex = 0; lineIndex <= charIndex; lineIndex += 1) {
      let currChar = ALPHABET[lineIndex];
      let lineWidth = lineIndex * 2 + 1;
      let insideSpacesCount = lineIndex === 0 ? 0 : lineWidth - 2;
      let outsideSpaceCount = (diamondWidth - lineWidth) / 2;
      let insideSpaces = ' '.repeat(insideSpacesCount);
      let outsideSpaces = ' '.repeat(outsideSpaceCount);

      let middleOfLine = lineIndex === 0 ? currChar : currChar + insideSpaces + currChar; // IMPROVEMENT: factored this repeptitive part out of prior IF-ELSE logic
      upperTriangle.push(outsideSpaces + middleOfLine + outsideSpaces + '\n');
    }

    let lowerTriangle = upperTriangle.slice(0, upperTriangle.length - 1).reverse();
    let diamondArr = upperTriangle.concat(lowerTriangle);
    return diamondArr.join('')
  }
}

module.exports = Diamond;