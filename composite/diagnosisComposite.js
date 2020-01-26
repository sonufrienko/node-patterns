class DiagnosisComposite {
  constructor(sectorName, composites = []) {
    this.sectorName = sectorName;
    this.composites = composites;
  }

  get isFail() {
    return this.composites.some(element => element.isFail);
  }

  report() {
    const statusIcon = this.isFail ? '\u274C' : '\u2705';
    return (
      `Sector: ${this.sectorName}`.padEnd(34) +
      statusIcon +
      '\n' +
      this.composites.map(element => element.report()).join('\n') +
      '\n'
    );
  }
}

module.exports = DiagnosisComposite;
