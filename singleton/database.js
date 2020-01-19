/**
 * Singleton as module + class
 */

const fs = require('fs');
const os = require("os");

class Database {
  constructor() {
    // Open file for appending. The file is created if it does not exist.
    this.writer = fs.createWriteStream('database.txt', { flags: 'a' });
  }

  write(data) {
    this.writer.write(`${data}${os.EOL}`);
  }
}

module.exports = new Database();
