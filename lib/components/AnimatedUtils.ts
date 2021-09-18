import { AppearFrom } from "../RNAnimated";

const INITIAL_POSITION_POSITIVE = 20;
const INITIAL_POSITION_NEGATIVE = -INITIAL_POSITION_POSITIVE;

const initialPositionByAppearFrom: { [key in AppearFrom]: number } = {
  ["left"]: INITIAL_POSITION_NEGATIVE,
  ["top"]: INITIAL_POSITION_NEGATIVE,
  ["right"]: INITIAL_POSITION_POSITIVE,
  ["bottom"]: INITIAL_POSITION_POSITIVE,
};

const inputRangeByAppearFrom: { [key in AppearFrom]: number[] } = {
  ["left"]: [INITIAL_POSITION_NEGATIVE, 0],
  ["top"]: [INITIAL_POSITION_NEGATIVE, 0],
  ["right"]: [0, INITIAL_POSITION_POSITIVE],
  ["bottom"]: [0, INITIAL_POSITION_POSITIVE],
};

const outputRangeByAppearFrom: { [key in AppearFrom]: number[] } = {
  ["left"]: [0, 1],
  ["top"]: [0, 1],
  ["right"]: [1, 0],
  ["bottom"]: [1, 0],
};

const translateByAppearFrom: {
  [key in AppearFrom]: "translateX" | "translateY";
} = {
  ["left"]: "translateX",
  ["top"]: "translateY",
  ["right"]: "translateX",
  ["bottom"]: "translateY",
};

export {
  inputRangeByAppearFrom,
  outputRangeByAppearFrom,
  translateByAppearFrom,
  initialPositionByAppearFrom,
};
