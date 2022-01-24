export default class Request {
  constructor() {
    this._requests = [];
  }

  get(url) {
    return this.fetch(url).then(resp => {
      this._requests.push(resp);
    });
  }

  fetch(url) {
    // Fetches using the native fetch API. This will be mocked out
    // in the jest test.
    return fetch(url);
  }

  async requestAll() {
    for (let i = 1; i <= 10; i++) {
      await this.get(`http://fakeurl.com/api/v1/endpoint/${i}/`);
    }

    return this._requests;
  }
}
