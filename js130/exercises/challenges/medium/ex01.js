const Diamond = {
  makeDiamond(char) {
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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

      if (lineIndex === 0) {
        upperTriangle.push(outsideSpaces + currChar + outsideSpaces + '\n');
      } else {
        upperTriangle.push(outsideSpaces + currChar + insideSpaces + currChar + outsideSpaces + '\n');
      }
    }

    let lowerTriangle = upperTriangle.slice(0, upperTriangle.length - 1).reverse();
    let diamondArr = upperTriangle.concat(lowerTriangle);
    let diamondStr = diamondArr.join('')
    console.log(diamondStr);
    return diamondStr;
  }
}

module.exports = Diamond;