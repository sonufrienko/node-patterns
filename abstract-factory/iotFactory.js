const Notification = require('./notification');

class HttpNotification extends Notification {
  constructor() {
    super('HTTP');
  }
}

class MqttNotification extends Notification {
  constructor() {
    super('MQTT');
  }
}

/**
 * Factory method
 */
const createNotification = type => {
  switch (type) {
    case 'http':
      return new HttpNotification();
    case 'mqtt':
      return new MqttNotification();
  }
};

module.exports = { createNotification };
