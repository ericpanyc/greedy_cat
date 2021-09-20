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
    let curDir = nextState.cat[i].direction;
    if (i === 0) {
      bodyPart = 'head';
    } else if (i === nextState.cat.length - 1) {
      bodyPart = 'tail';
    } else if (nextState.cat[i].direction == nextState.cat[i - 1].direction){
      bodyPart = 'body';
    } else {
      bodyPart = 'corner';

      switch (nextState.cat[i].direction) {
        case 'right':
          if (nextState.cat[i - 1].direction == 'down') {
            curDir = 'right';
          } else {
            curDir = 'down';
          }
          break;

        case 'down':
          if (nextState.cat[i - 1].direction == 'left') {
            curDir = 'down';
          } else {
            curDir = 'left';
          }
          break;

        case 'left':
          if (nextState.cat[i - 1].direction == 'up') {
            curDir = 'left';
          } else {
            curDir = 'up';
          }
          break;

        case 'up':
          if (nextState.cat[i - 1].direction == 'right') {
            curDir = 'up';
          } else {
            curDir = 'right';
          }
          break;
        default:
          return;
      }

    }

    document.getElementById(
      `row${nextState.cat[i].coordinate[0]}col${nextState.cat[i].coordinate[1]}`
    ).innerHTML = image(bodyPart, curDir);
  }

  document.getElementById(
      `row${nextState.food.coordinate[0]}col${nextState.food.coordinate[1]}`
  ).innerHTML = image('food', nextState.food.direction);

}
