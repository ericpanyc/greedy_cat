import { calculateNextState } from './calculate_next_state.js';
import { handleGameOver } from './handle_game_over.js';
import { updateBoard } from './update_board.js';
import { handleGetFood } from './handle_get_food.js';

export const move = (currentState, direction, timer) => {
  let nextState = calculateNextState(currentState, direction);

  if (handleGameOver(nextState, timer)) {
    return;
  }

  nextState = handleGetFood(currentState, nextState);

  updateBoard(currentState, nextState);

  return nextState;
}
