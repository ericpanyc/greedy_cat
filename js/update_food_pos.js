import { BOARD_SIZE } from './constants.js';

export const updateFoodPos = (cat) => {
    let food;
    while (true) {
        food = [
            Math.floor(1 + Math.random() * (BOARD_SIZE - 2)),
            Math.floor(1 + Math.random() * (BOARD_SIZE - 2))
        ];

        for (let i = 0; i < cat.length; i++) {
            if (food[0] !== cat[i][0] || food[1] !== cat[i][1]) {
                return food;
            }
        }
    }
}