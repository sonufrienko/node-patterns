class DiagnosisItem {
  #statusNames = new Map([
    [-1, 'Failure'],
    [0, "Can't determine"],
    [1, 'Success']
  ]);

  constructor({ element, statusCode = 0 }) {
    this.element = element;
    this.statusCode = statusCode;
    this.description = '';
  }

  get isFail() {
    return this.statusCode === -1;
  }

  report() {
    const statusName = this.#statusNames.get(this.statusCode);
    return `${this.element.padEnd(34, '.')}${statusName}${this.description ? ` (${this.description})` : ''}`;
  }

  changeStatus({ statusCode = 0, description = '' }) {
    this.statusCode = statusCode;
    this.description = description;
  }
}

module.exports = DiagnosisItem;
