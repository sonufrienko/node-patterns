class API {
  #baseUrl;
  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

  get url() {
    return this.#baseUrl;
  }

  addMessage() {
    // do something
  }
}

const apiExtensions = {
  selfDiagnosis() {
    // check api health
    console.log(`${this.url} is healthy`)
  }
}

Object.assign(API.prototype, apiExtensions);

const api = new API('https://api.demo.com');
api.addMessage();
api.selfDiagnosis();