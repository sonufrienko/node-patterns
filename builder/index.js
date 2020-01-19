const ServerBuilder = require('./serverBuilder');

const server = new ServerBuilder('server001')
  .addCPU(2)
  .addMem(8)
  .allowSSH()
  .installOS('Ubuntu Server 18.04.3 LTS')
  .build();

console.log(server.toString());
