export const calculateNextState = (currentState, direction) => {
  const currentHead = currentState.cat[0].coordinate;
  const headDirection = currentState.cat[0].direction;

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

  nextState.push({ coordinate: newHead, direction: direction });

  for (let i = 0; i < currentState.cat.length - 1; i++) {
    nextState.push(currentState.cat[i]);
  }

  return {
    cat: nextState,
    food: currentState.food,
  };
}
