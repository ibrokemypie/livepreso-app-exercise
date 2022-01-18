/**
 * Test cases! Please don't edit.
 */
import { Element } from "./element.js";

it("test remove element fires correctly", () => {
  const element = new Element();
  element.removeElement = jest.fn();
  element.render();
  element.clickElement();
  expect(element.removeElement).toBeCalled();
});

