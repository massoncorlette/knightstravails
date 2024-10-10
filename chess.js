

const gameBoard = [8][8];

function knightMoves(start,end) {

  let moves = [];

  let endX = end[0];
  let endY = end[1];

  let startX = start[0];
  let startY = start[1];

  // error handling
  if (startX < 0 || startX > 7 || startY < 0 || startY > 7) {
    return ;
  }

  // base case
  if (startX === endX && startY === endY) {
    return -1;
  }



}