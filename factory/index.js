const createConnection = require('./createConnection');

const httpConnection = createConnection('http://website.com');
const ftpConnection = createConnection('ftp://196.168.0.1');
const sshConnection = createConnection('ssh://username@hostname');

httpConnection.post();
ftpConnection.download();
sshConnection.sendCommand();
