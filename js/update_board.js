import { image } from './image.js';

export const updateBoard = (currentState, nextState) => {
  for (let i = 0; i < currentState.cat.length; i++) {
    document.getElementById(
      `row${currentState.cat[i].coordinate[0]}col${currentState.cat[i].coordinate[1]}`
    ).innerHTML = '';
  }

  document.getElementById(
      `row${currentState.food.coordinate[0]}col${currentState.food.coordinate[1]}`
  ).innerHTML = '';

  for (let i = 0; i < nextState.cat.length; i++) {
    let bodyPart;
    if (i === 0) {
      bodyPart = 'head';
    } else if (i === nextState.cat.length - 1) {
      bodyPart = 'tail';
    } else {
      bodyPart = 'body';
    }

    document.getElementById(
      `row${nextState.cat[i].coordinate[0]}col${nextState.cat[i].coordinate[1]}`
    ).innerHTML = image(bodyPart, nextState.cat[i].direction);
  }

  document.getElementById(
      `row${nextState.food.coordinate[0]}col${nextState.food.coordinate[1]}`
  ).innerHTML = image('food', nextState.food.direction);

}
