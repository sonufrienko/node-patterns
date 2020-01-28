const Log = require('./log');
const Iterator = require('./iterator');

const logs = new Iterator([
  new Log(Date.now(), 'Log first'),
  new Log(Date.now(), 'Log #2'),
  new Log(Date.now(), 'Log #3'),
  new Log(Date.now(), 'Log last')
]);

logs.current().print();

while (logs.hasNext()) {
  logs.next().print();
}
