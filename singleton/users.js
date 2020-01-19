/**
 * Singleton as module + functions
 */

const database = require('./database');

const addUser = ({ fullName, role }) => {
  database.write(`User: ${fullName}, role: ${role}`);
};

module.exports = {
  add: addUser
};
