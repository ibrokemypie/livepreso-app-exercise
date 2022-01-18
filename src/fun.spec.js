/**
 * Test cases! Please don't edit.
 */
import { livePresoGame } from "./fun.js";

it("check livepreso game numbers", () => {
  expect(livePresoGame(1)).toEqual(1);
  expect(livePresoGame(77)).toEqual(77);
});

it("check livepreso game 'live'", () => {
  expect(livePresoGame(20)).toEqual("live");
});

it("check livepreso game 'preso'", () => {
  expect(livePresoGame(9)).toEqual("Preso");
});

it("check livepreso game 'livepreso'", () => {
  expect(livePresoGame(78)).toEqual("livePreso");
  expect(livePresoGame(96)).toEqual("livePreso");
});
