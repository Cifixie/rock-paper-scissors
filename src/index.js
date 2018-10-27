// @flow

type Result = 1 | 0 | -1;

const r: Result = {
  win: 1,
  draw: 0,
  loss: -1
};

type ResultMatrix = Array<Array<R>>;
const resultMatrix = [
  [r.draw, r.loss, r.win],
  [r.win, r.draw, r.loss],
  [r.loss, r.win, r.draw]
];

export const options = {
  rock: 0,
  paper: 1,
  scissors: 2
};

type Options = $Keys<typeof countries>;

const rps = (a: Options, b: Options): Result => resultMatrix[a][b];

export default rps;
