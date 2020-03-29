const MessengerFactory = require('./messengerFactory');
const IotFactory = require('./iotFactory');

/**
 * Abstract Factory
 */
const notificationFactory = (category, type) => {
  switch (category) {
    case 'messenger':
      return MessengerFactory.createNotification(type);
    case 'iot':
      return IotFactory.createNotification(type);
  }
};

const n1 = notificationFactory('messenger', 'slack');
const n2 = notificationFactory('iot', 'mqtt');

n1.send('Meeting in 10 minutes!');
n2.send('light-on');
