export const calculateNextState = (currentState, direction) => {
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

  nextState.push({ coordinate: newHead, direction: direction });

  for (let i = 0; i < currentState.length - 2; i++) {
    nextState.push(currentState[i]);
  }

  nextState.push(currentState[currentState.length - 1]);

  return nextState;
}
