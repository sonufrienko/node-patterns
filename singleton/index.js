const database = require('./database');
const users = require('./users');

database.write('Start');

users.add({
  fullName: 'Sergey Onufrienko',
  role: 'Full Stack Developer'
});

database.write('End');
