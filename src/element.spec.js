/**
 * Test cases! Please don't edit.
 */
import { Element } from "./element.js";

it("test remove element fires correctly", () => {
  const element = new Element();
  element.render();
  element.el.remove = jest.fn();
  element.clickElement();
  expect(element.el.remove).toBeCalled();
});

