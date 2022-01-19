/**
 * Test cases! Please don't edit.
 */
import { livePresoGame } from "./fun.js";

it("check livepreso game numbers", () => {
  expect(livePresoGame(1)).toEqual(1);
  expect(livePresoGame(77)).toEqual(77);
});

it("check livepreso game 'Live'", () => {
  expect(livePresoGame(20)).toEqual("Live");
});

it("check livepreso game 'Preso'", () => {
  expect(livePresoGame(9)).toEqual("Preso");
});

it("check livepreso game 'LivePreso'", () => {
  expect(livePresoGame(78)).toEqual("LivePreso");
  expect(livePresoGame(96)).toEqual("LivePreso");
});
