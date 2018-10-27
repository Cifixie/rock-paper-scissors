// @flow

type Result = 1 | 0 | -1;

const r: Result = {
  win: 1,
  draw: 0,
  loss: -1
};

type ResultMatrix = Array<Array<Result>>;
const resultMatrix: ResultMatrix = [
  [r.draw, r.loss, r.win],
  [r.win, r.draw, r.loss],
  [r.loss, r.win, r.draw]
];

type Options = {
  rock: number,
  paper: number,
  scissors: number
};

export const options: Options = {
  rock: 0,
  paper: 1,
  scissors: 2
};

type Option = $Keys<Options>;

const rps = (a: Option, b: Option): Result => resultMatrix[a][b];

export default rps;
