const notifications = require('./notifications');
const Person = require('./person');

const payloadSpecialist = new Person('Michael A. Murray');
const pilot = new Person('Rhea H. Messer');
const commander = new Person('Heather S. McInnis');

notifications.subscribe(0, payloadSpecialist);
notifications.subscribe(0, pilot);
notifications.subscribe(1, pilot);
notifications.subscribe(2, commander);

notifications.alert(0, 'Payload #002 has moved');
notifications.alert(1, 'Meteorite ahead!');
notifications.alert(2, 'Left engine is down!');
