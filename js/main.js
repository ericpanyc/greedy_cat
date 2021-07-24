import { initGame } from './init_game.js';
import { move } from './move.js';
import { KEY_DIRECTION_MAP, BOARD_SIZE } from './constants.js';

let state = initGame();

const timer = setInterval(() => {
  state = move(state, state[0].direction, timer);
}, 1000);

document.addEventListener("keydown", ({ keyCode }) => {
  if (KEY_DIRECTION_MAP[keyCode]) {
    state = move(state, KEY_DIRECTION_MAP[keyCode], timer);
  }
});
