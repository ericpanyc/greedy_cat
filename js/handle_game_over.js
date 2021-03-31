import { BOARD_SIZE } from './constants.js';

export const handleGameOver = (state, timer) => {
  const newHead = state[0].coordinate;

  if (newHead[0] < 0 || newHead[0] > BOARD_SIZE - 1 || newHead[1] < 0 || newHead[1] > BOARD_SIZE - 1) {
    clearInterval(timer);
    window.alert('game over');
    window.location.reload();
    return true;
  } else {
    return false;
  }
}
