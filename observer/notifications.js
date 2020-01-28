class Notifications {
  #subscribers = [];

  subscribe(dangerLevel, person) {
    this.#subscribers.push({
      dangerLevel,
      person
    });
  }

  alert(dangerLevel, message) {
    this.#subscribers
      .filter(subscriber => subscriber.dangerLevel === dangerLevel)
      .forEach(subscriber => subscriber.person.notify(dangerLevel, message));
  }
}

module.exports = new Notifications();
