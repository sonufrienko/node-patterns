class Person {
  #dangerLevelIcons = ['\u26A0', '\u26A1', '\u2620'];
  #name = null;

  constructor(name) {
    this.#name = name;
  }

  notify(dangerLevel = 0, message) {
    console.log(`${this.#dangerLevelIcons[dangerLevel]}. ${this.#name}, ${message}`)
  }
}

module.exports = Person;