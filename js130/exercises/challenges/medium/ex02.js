class Robot {
  static names = [];
  static NAME_LETTER_COUNT = 2;
  static NAME_NUM_COUNT = 3;
  static NAME_MAX_NUM = 9;

  static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor() {
    this._name = null;
  }

  rename() {
    let name;

    do {
      name = '';
      for (let i = 0; i < Robot.NAME_LETTER_COUNT; i += 1) {
        let randomCharIndex = Math.floor(Math.random() * (Robot.ALPHABET.length + 1));
        name += Robot.ALPHABET[randomCharIndex];
      }

      for (let i = 0; i < Robot.NAME_NUM_COUNT; i += 1) {
        name += String(Math.floor(Math.random() * (Robot.NAME_MAX_NUM + 1)));
      }
    }
    while (Robot.names.includes(name));

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
    this.rename();
  }

}

module.exports = Robot;