class Iterator {
  #items = null;
  #index = 0;

  constructor(items = []) {
    this.#items = items;
  }

  current() {
    return this.#items[this.#index];
  }

  hasNext() {
    return this.#index < this.#items.length - 1;
  }

  next() {
    if (this.hasNext()) {
      this.#index++;
      return this.current();
    }

    return null;
  }
}

module.exports = Iterator;