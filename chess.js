

const gameBoard = [8][8];

function knightMoves(start,end) {

  // adjacency list graph, that will hold the edges or moves for the graph
  let moves = [];

  let currentMoves = [];

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
    return currentMoves;
  }
  currentMoves.push(start);

  start[0] = start[0] + 2;
  start[1] = start[1] + 1;

  knightMoves(start, end);

  return currentMoves;
}

console.log(knightMoves([0,1], [2,4]));