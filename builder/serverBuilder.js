const Server = require('./server');

class ServerBuilder {
  constructor(serverName) {
    this.openPorts = [80, 443];
  }

  addCPU(cpu) {
    this.cpu = cpu;
    return this;
  }

  addMem(mem) {
    this.mem = mem;
    return this;
  }

  allowSSH() {
    this.openPorts.push(22);
    return this;
  }

  installOS(os) {
    this.os = os;
    return this;
  }

  build() {
    return new Server(this);
  }
}

module.exports = ServerBuilder;
