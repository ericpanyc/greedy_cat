const DIRECTION_DEGREE_MAP = {
  right: 0,
  down: 90,
  left: 180,
  up: 270,
};

export const image = (part, direction) => {
  const rotateDegree = DIRECTION_DEGREE_MAP[direction]
  return `<img src="${part}.png" style="transform:rotate(${rotateDegree}deg);" height="20px">`;
};
