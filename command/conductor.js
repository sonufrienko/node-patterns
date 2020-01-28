class Conductor {
  constructor() {
    this.logs = [];
  }

  get history() {
    return this.logs.slice();
  }

  run(command) {
    command.execute();
    this.logs.push(command.name);
  }
}

module.exports = new Conductor();
