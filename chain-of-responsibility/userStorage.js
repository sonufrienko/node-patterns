class UserStorage {
  constructor(storageName, storage) {
    this.storageName = storageName;
    this.storage = storage;
    this.next = null;
  }

  setNext(storage) {
    this.next = storage;
  }

  find(user) {
    if (this.storage.has(user)) {
      const userData = this.storage.get(user);
      userData.storageName = this.storageName;
      return userData;
    } else if (this.next) {
      return this.next.find(user);
    } else {
      return null;
    }
  }
}

module.exports = UserStorage;
