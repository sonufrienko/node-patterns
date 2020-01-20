/**
 * Adapter to browser locaStorage
 */

class LocalStorage {
  #storage = new Map();

  getItem(key) {
    return this.#storage.get(key);
  }

  setItem(key, value) {
    this.#storage.set(key, value);
  }

  removeItem(key) {
    this.#storage.delete(key);
  }

  clear() {
    this.#storage.clear();
  }

  key(n) {
    return [...this.#storage.keys()][n];
  }

  get length() {
    return this.#storage.size;
  }
}

module.exports = new LocalStorage();
