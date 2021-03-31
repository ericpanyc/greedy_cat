import { calculateNextState } from './calculate_next_state.js';
import { handleGameOver } from './handle_game_over.js';
import { updateBoard } from './update_board.js';

export const move = (currentState, direction, timer) => {
  const nextState = calculateNextState(currentState, direction);

  if (handleGameOver(nextState, timer)) {
    return;
  }
  
  updateBoard(currentState, nextState);

  return nextState;
}
