class Connection {
  #url = null;

  constructor(url) {
    this.#url = url;
  }

  get url() {
    return this.#url;
  }
}

class HttpConnection extends Connection {
  constructor(url) {
    super(url);
  }

  post() {
    console.log(`HTTP >> Sending data to ${this.url} ...`);
  }
}

class FtpConnection extends Connection {
  constructor(url) {
    super(url);
  }

  download() {
    console.log(`FTP >> Downloading data from ${this.url} ...`);
  }
}

class SSHConnection extends Connection {
  constructor(url) {
    super(url);
  }

  sendCommand() {
    console.log(`SSH >> Send comand to ${this.url} ...`);
  }
}

module.exports = {
  HttpConnection,
  FtpConnection,
  SSHConnection
};
