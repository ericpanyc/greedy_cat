import { image } from './image.js';

export const updateBoard = (currentState, nextState) => {
  for (let i = 0; i < currentState.length; i++) {
    document.getElementById(
      `row${currentState[i].coordinate[0]}col${currentState[i].coordinate[1]}`
    ).innerHTML = '';
  }

  for (let i = 0; i < nextState.length; i++) {
    let bodyPart;
    if (i === 0) {
      bodyPart = 'head';
    } else if (i === nextState.length - 1) {
      bodyPart = 'tail';
    } else {
      bodyPart = 'body';
    }

    document.getElementById(
      `row${nextState[i].coordinate[0]}col${nextState[i].coordinate[1]}`
    ).innerHTML = image(bodyPart, nextState[i].direction);
  }
}
