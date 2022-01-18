/**
 * Test cases! Please don't edit.
 */
import Request from "./request.js";
import td from "testdouble";

it("fetches in order", () => {
  const request = new Request();

  // Mock a real network request
  const mockFetch = jest.fn(function(url) {
    const id = Number(url.split("/").slice(-2)[0]);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ url, id });
      }, Math.ceil(Math.random() * 10));
    });
  });

  td.replace(request, "fetch", mockFetch);

  return Promise.resolve(request.requestAll()).then(resp => {
    for (let i = 0; i < 10; i++) {
      expect(resp[i]).toEqual({
        id: i + 1,
        url: `http://fakeurl.com/api/v1/endpoint/${i + 1}/`
      });
    }
  });
});

afterEach(() => {
  td.reset();
});
