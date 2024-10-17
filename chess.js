
function knightMoves(start,end) {

  // que 
  let moves = [];

  // adjacency list graph, that will hold the edges or moves for the graph
  let adjacencyListOfMoves = []

  function knightMoveErrorHandler(x,y) {
    if (!(x < 0 || x > 7 || y < 0 || y > 7)) {
      moves.push([x,y]);
    }
  }

  function filterVertices(moveXY) {
    let currentMoves = [
      [moveXY[0], moveXY[1]],
      [moveXY[0] + 2, moveXY[1] + 1],
      [moveXY[0] + 2, moveXY[1] - 1],
      [moveXY[0] + 1, moveXY[1] + 2],
      [moveXY[0] + 1, moveXY[1] - 2],
      [moveXY[0] - 2, moveXY[1] + 1],
      [moveXY[0] - 2, moveXY[1] - 1],
      [moveXY[0] - 1, moveXY[1] + 2],
      [moveXY[0] - 1, moveXY[1] - 2],
    ];

    currentMoves.forEach((move) => knightMoveErrorHandler(move[0],move[1]));

    if (moves.length !== 0) {
      return moves;
    }
  }

  function checkVertices(moves) {
    for (let i=0;i<moves.length;i++) {
      if (moves[0] === end[0] && moves[1] === end[1]) {
        return adjacencyListOfMoves;
      }
    }
    return ;
  }
  adjacencyListOfMoves.push(filterVertices(start));

  
  

  return adjacencyListOfMoves;
  
}

console.log(knightMoves([0,3], [2,4]));