const { HttpConnection, FtpConnection, SSHConnection } = require('./connections');

const ConnectionTypes = new Map([
  ['http', HttpConnection],
  ['ftp', FtpConnection],
  ['ssh', SSHConnection]
]);

const createConnection = connectionUrl => {
  const [connectionType] = connectionUrl.toLowerCase().split('://');
  const ConnectionClass = ConnectionTypes.get(connectionType);
  return new ConnectionClass(connectionUrl);
};

module.exports = createConnection;
