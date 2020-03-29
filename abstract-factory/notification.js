class Notification {
  constructor(type) {
    this.type = type;
  }

  send(message) {
    console.log(`${this.type} >>> ${message}`);
  }
}

module.exports = Notification;
