import { BOARD_SIZE } from './constants.js';
import { image } from './image.js';

export const initGame = () => {
  const tail = [
    Math.floor(Math.random() * (BOARD_SIZE - 5)),
    Math.floor(Math.random() * BOARD_SIZE),
  ];
  const body = [tail[0], tail[1] + 1];
  const head = [tail[0], tail[1] + 2];

  let table = `<table width="${20 * BOARD_SIZE}px" cellspacing=0 cellpadding=0>`;
  for(let row = 0; row < BOARD_SIZE; row++) {
    table += '<tr height="20px">';
    for(let col = 0; col < BOARD_SIZE; col++) {
      if (row === tail[0] && col === tail[1]) {
        table += `<td id="row${row}col${col}">${image('tail', 'right')}</td>`;
        table += `<td id="row${row}col${col+1}">${image('body', 'right')}</td>`;
        table += `<td id="row${row}col${col+2}">${image('head', 'right')}</td>`;
        col += 2;
      } else {
        table += `<td id="row${row}col${col}"></td>`;
      }
    }
    table += '</tr>';
  }
  table += '</table>';

  document.getElementById('game').innerHTML = table;
  return [
    { coordinate: head, direction: 'right' },
    { coordinate: body, direction: 'right' },
    { coordinate: tail, direction: 'right' },
  ];
};
