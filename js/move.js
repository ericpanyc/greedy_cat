import { HEAD_IMAGE, BODY_IMAGE, TAIL_IMAGE } from './constants.js';

export const move = (currentState, direction) => {
  const currentPositions = currentState.positions;
  const currentHead = currentPositions[0];
  const currentDirection = currentState.direction;

  let newHead;
  switch (direction) {
    case 'left':
      newHead = [currentHead[0], currentHead[1] - 1];
      break;
    case 'right':
      newHead = [currentHead[0], currentHead[1] + 1];
      break;
    case 'up':
      newHead = [currentHead[0] - 1, currentHead[1]];
      break;
    case 'down':
      newHead = [currentHead[0] + 1, currentHead[1]];
      break;
    default:
      return;
  }

  let newPositions = [];

  // set head
  newPositions.push(newHead);
  document.getElementById(`row${newHead[0]}col${newHead[1]}`).innerHTML = HEAD_IMAGE;

  // set body
  let pos;
  for (let index = 0; index < currentPositions.length - 2; index++) {
    pos = currentPositions[index];
    newPositions.push(pos);
    document.getElementById(`row${pos[0]}col${pos[1]}`).innerHTML = BODY_IMAGE;
  }

  // set tail
  pos = currentPositions[currentPositions.length - 2];
  newPositions.push(pos);
  document.getElementById(`row${pos[0]}col${pos[1]}`).innerHTML = TAIL_IMAGE;

  // unset original tail
  pos = currentPositions[currentPositions.length - 1];
  document.getElementById(`row${pos[0]}col${pos[1]}`).innerHTML = "";

  return { positions: newPositions, direction: direction }
}
