import { image } from './image.js';

export const move = (currentState, direction) => {
  const currentHead = currentState[0].coordinate;
  const headDirection = currentState[0].direction;

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

  let nextState = [];

  // set new head
  nextState.push({ coordinate: newHead, direction: direction });
  document.getElementById(`row${newHead[0]}col${newHead[1]}`).innerHTML = image('head', direction);

  // move
  for (let i = 0; i < currentState.length; i++) {
    let content;
    if (i < currentState.length - 2) {
      nextState.push(currentState[i]);
      content = image('body', currentState[i].direction);
    } else if (i === currentState.length - 2) {
      nextState.push(currentState[i]);
      content = image('tail', currentState[i].direction);
    } else {
      content = '';
    }

    document.getElementById(
      `row${currentState[i].coordinate[0]}col${currentState[i].coordinate[1]}`
    ).innerHTML = content;
  }

  return nextState;
}
