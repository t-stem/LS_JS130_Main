class Robot {
  static NAME_LETTER_COUNT = 2;
  static NAME_NUM_COUNT = 3;
  static NAME_MAX_NUM = 9;

  static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  static names = [];
  
  static checkNameUniqueness(name) { // IMPROVEMENT: split from rename and moved to static
    return Robot.names.includes(name);
  }

  static genName() { // IMPROVEMENT: split from rename and moved to static
    let name = '';

    for (let i = 0; i < Robot.NAME_LETTER_COUNT; i += 1) {
      let randomCharIndex = Math.floor(Math.random() * Robot.ALPHABET.length);
      name += Robot.ALPHABET[randomCharIndex];
    }

    for (let i = 0; i < Robot.NAME_NUM_COUNT; i += 1) {
      name += String(Math.floor(Math.random() * (Robot.NAME_MAX_NUM + 1)));
    }

    return name;
  }

  constructor() {
    this._name = null;
  }

  rename() {
    let name;

    do {
      name = Robot.genName();
    }
    while(Robot.checkNameUniqueness(name));

    this._name = name;
    Robot.names.push(name);
  }

  name() {
    if (this._name === null) {
      this.rename();
    }

    return this._name;
  }

  reset() {
    let nameIndex = Robot.names.indexOf(this._name);

    if (nameIndex !== -1) {
      Robot.names.splice(nameIndex, 1); // FIX: corrected for case nameIndex === -1
    }
    
    this.rename();
  }

}

module.exports = Robot;