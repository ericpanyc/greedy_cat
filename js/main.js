import { initGame } from './init_game.js';
import { move } from './move.js';
import { KEY_DIRECTION_MAP } from './constants.js';

let state = initGame();
document.addEventListener("keydown", ({ keyCode }) => {
  state = move(state, KEY_DIRECTION_MAP[keyCode]);
});
setInterval(() => {
  state = move(state, state[0].direction);
}, 100);
