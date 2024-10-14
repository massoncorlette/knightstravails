

const gameBoard = [8][8];

function knightMoves(start,end) {

  // adjacency list graph, that will hold the edges or moves for the graph
  let moves = [];

  //my Que array
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
  while (!(startX === endX && startY === endY)) {
    

    
  }
  
  if (startX === endX && startY === endY) {
    return currentMoves;
  }

}

console.log(knightMoves([0,1], [2,4]));