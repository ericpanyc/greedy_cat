import { BOARD_SIZE } from './constants.js';

export const handleGameOver = (state, timer) => {
  const newHead = state.cat[0].coordinate;

  if (newHead[0] < 0 || newHead[0] > BOARD_SIZE - 1 || newHead[1] < 0 || newHead[1] > BOARD_SIZE - 1 || catOverlap(state.cat)) {
    clearInterval(timer);
    window.alert('game over');
    window.location.reload();
    return true;
  } else {
    return false;
  }


};

const catOverlap = (cat) => {
  for (let i = 1; i < cat.length; i++) {
    if (cat[0].coordinate[0] === cat[i].coordinate[0] && cat[0].coordinate[1] === cat[i].coordinate[1]) {
      return true;
    }
  }
  return false;
};