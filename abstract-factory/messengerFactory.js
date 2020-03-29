const Notification = require('./notification');

class SlackNotification extends Notification {
  constructor() {
    super('Slack');
  }
}

class TelegramNotification extends Notification {
  constructor() {
    super('Telegram');
  }
}

class PushNotification extends Notification {
  constructor() {
    super('Push');
  }
}

/**
 * Factory method
 */
const createNotification = type => {
  switch (type) {
    case 'slack':
      return new SlackNotification();
    case 'telegram':
      return new TelegramNotification();
    case 'push':
      return new PushNotification();
  }
};

module.exports = { createNotification };
