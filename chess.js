
function knightMoves(start,end) {

  // que 
  let moves = [];

  // adjacency list graph, that will hold the edges or moves for the graph
  let adjacencyListOfMoves = []

  function knightMoveErrorHandler(x,y) {
    let move = []
    if (!(x < 0 || x > 7 || y < 0 || y > 7)) {
      move.push([x,y]);
      return move;
    }
  }

  function filterVertices(moveXY) {
    let currentMoves = [
      [moveXY[0] + 2, moveXY[1] + 1],
      [moveXY[0] + 2, moveXY[1] - 1],
      [moveXY[0] + 1, moveXY[1] + 2],
      [moveXY[0] + 1, moveXY[1] - 2],
      [moveXY[0] - 2, moveXY[1] + 1],
      [moveXY[0] - 2, moveXY[1] - 1],
      [moveXY[0] - 1, moveXY[1] + 2],
      [moveXY[0] - 1, moveXY[1] - 2],
    ];

    // getting the valid moves
    let results = [];
    currentMoves.forEach((move) => {
      let result = knightMoveErrorHandler(move[0], move[1]);
      if (result) {
        results.push(result);
      }
    });

    if (results.length !== 0) {
      return results;
    }  

  }
  return filterVertices(start);

}

console.log(knightMoves([0,3], [2,4]));