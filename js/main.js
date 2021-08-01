import { initGame } from './init_game.js';
import { move } from './move.js';
import { KEY_DIRECTION_MAP, BOARD_SIZE } from './constants.js';

let state = initGame();

const timer = setInterval(() => {
  state = move(state, state.cat[0].direction, timer);
}, 1000);

document.addEventListener("keydown", ({ keyCode }) => {
  if (KEY_DIRECTION_MAP[keyCode] && checkDirValid(KEY_DIRECTION_MAP[keyCode], state.cat[0].direction)) {
    state = move(state, KEY_DIRECTION_MAP[keyCode], timer);
  }
});

const checkDirValid = (curDir, prevDir) => {
  switch (curDir) {
    case 'left':
      return prevDir !== 'right';
      break;
    case 'right':
      return prevDir !== 'left';
    case 'up':
      return prevDir !== 'down';
      break;
    case 'down':
      return prevDir !== 'up';
    default:
      return;
  }
};
