import {BOARD_SIZE} from './constants.js'

export const handleGetFood = (currentState, nextState) => {
    const newHead = nextState[0].coordinate;
    const foodPos = currentState[currentState.length - 1].coordinate;

    if (newHead[0] === foodPos[0] && newHead[1] === foodPos[1]) {
        nextState[0].coordinate = foodPos;
        nextState[0].direction = nextState[0].direction;

        for (let i = 1; i < nextState.length; i++) {
            nextState[i].coordinate = currentState[i - 1].coordinate;
            nextState[i].direction = currentState[i - 1].direction;
        }

        const newFood = [
            Math.floor(1 + Math.random() * (BOARD_SIZE - 2)),
            Math.floor(1 + Math.random() * (BOARD_SIZE - 2))
        ];

        nextState.push({ coordinate: newFood , direction : 'right' });

    }

    return nextState;
}