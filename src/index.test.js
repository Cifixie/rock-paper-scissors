// @flow

import rps, { options } from "./index";

test("equal options is always draw", () => {
  expect(rps(options.rock, options.rock)).toBe(0);
  expect(rps(options.paper, options.paper)).toBe(0);
  expect(rps(options.scissors, options.scissors)).toBe(0);
});

test("rock beats scissors but losses to paper", () => {
  expect(rps(options.rock, options.scissors)).toBe(1);
  expect(rps(options.rock, options.paper)).toBe(-1);
});

test("paper beats rock but losses to scissors", () => {
  expect(rps(options.paper, options.rock)).toBe(1);
  expect(rps(options.paper, options.scissors)).toBe(-1);
});

test("scissors beats paper but losses to rock", () => {
  expect(rps(options.scissors, options.paper)).toBe(1);
  expect(rps(options.scissors, options.rock)).toBe(-1);
});
