
function knightMoves(start,end) {

  // adjacency list graph, that will hold the edges or moves for the graph
  let moves = [];

  //my Que array
  let currentMoves = [
    [start[0], start[1]],
    [start[0] + 2, start[1] + 1],
    [start[0] + 2, start[1] - 1],
    [start[0] + 1, start[1] + 2],
    [start[0] + 1, start[1] - 2],
    [start[0] - 2, start[1] + 1],
    [start[0] - 2, start[1] - 1],
    [start[0] - 1, start[1] + 2],
    [start[0] - 1, start[1] - 2],
  ];

  function knightMoveErrorHandler(x,y) {
    if (!(x < 0 || x > 7 || y < 0 || y > 7)) {
      moves.push([x,y]);
    }
  }

  currentMoves.forEach((move) => knightMoveErrorHandler(move[0],move[1]));

  return moves;
}

console.log(knightMoves([0,3], [3,3]));