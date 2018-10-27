import { add } from "ramda";

const r = {
  win: 1,
  draw: 0,
  loss: -1
};

const result = [
  [r.draw, r.loss, r.win],
  [r.win, r.draw, r.loss],
  [r.loss, r.win, r.draw]
];

export const options = {
  rock: 0,
  paper: 1,
  scissors: 2
};

export default (a, b) => result[a][b];
