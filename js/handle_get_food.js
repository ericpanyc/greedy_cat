import {BOARD_SIZE} from './constants.js';
import {updateFoodPos} from './update_food_pos.js';

export const handleGetFood = (currentState, nextState) => {
    const newHead = nextState.cat[0].coordinate;
    const foodPos = currentState.food.coordinate;

    if (newHead[0] === foodPos[0] && newHead[1] === foodPos[1]) {
        nextState.cat[0].coordinate = foodPos;

        for (let i = 1; i < nextState.cat.length; i++) {
            nextState.cat[i] = currentState.cat[i - 1];
        }

        nextState.cat.push(currentState.cat[currentState.cat.length - 1]);

        const newFood = updateFoodPos(nextState.cat);

        nextState.food = { coordinate: newFood , direction : 'right' };

    }

    return nextState;
}