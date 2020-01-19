class Server {
  constructor({ cpu = 0.5, mem = 1, disk = 1, network = 100, openPorts = [], os = 'none' }) {
    this.cpu = cpu;
    this.mem = mem;
    this.disk = disk;
    this.network = network;
    this.openPorts = openPorts;
    this.os = os;
  }

  toString() {
    return `Server:
- CPU: ${this.cpu}
- MEM: ${this.mem} GB
- DISK: ${this.disk} GB
- NET: ${this.network} MB/s
- Open ports: ${this.openPorts.join()}
- OS: ${this.os}`;
  }
}

module.exports = Server;
