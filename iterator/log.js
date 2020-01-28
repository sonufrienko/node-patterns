class Log {
  #date = null;
  #text = null;

  constructor(date, text) {
    this.#date = date;
    this.#text = text;
  }

  get date() {
    return this.#date;
  }

  get text() {
    return this.#text;
  }

  print() {
    console.log(`${this.#date}, ${this.#text}`);
  }
}

module.exports = Log;
