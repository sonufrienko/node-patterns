const UserStorage = require('./userStorage');

const blackList = new Map([['user0', { name: 'Tom Marvolo Riddle' }]]);
const regionalCache = new Map([['user1', { name: 'Michael A. Murray' }]]);
const globalCache = new Map([
  ['user1', { name: 'Michael A. Murray' }],
  ['user2', { name: 'Rhea H. Messer' }]
]);
const database = new Map([
  ['user1', { name: 'Michael A. Murray' }],
  ['user2', { name: 'Rhea H. Messer' }],
  ['user3', { name: 'Heather S. McInnis' }]
]);

class SecurityHelper {
  constructor() {
    const blackListStorage = new UserStorage('Black list', blackList);
    const regionalStorage = new UserStorage('Regional cache', regionalCache);
    const globalStorage = new UserStorage('Global cache', globalCache);
    const databaseStorage = new UserStorage('Database', database);

    blackListStorage.setNext(regionalStorage);
    regionalStorage.setNext(globalStorage);
    globalStorage.setNext(databaseStorage);

    this.storage = blackListStorage;
  }

  signIn(user) {
    return this.storage.find(user);
  }
}

module.exports = SecurityHelper;
