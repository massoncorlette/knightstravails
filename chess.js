
function knightMoves(start,end) {

  // adjacency list graph, that will hold the edges or moves for the graph
  let adjacencyListOfMoves = []

  function knightMoveErrorHandler(x,y) {
    let move = []
    if (!(x < 0 || x > 7 || y < 0 || y > 7)) {
      move.push([start[0],start[1]],[x,y]);
      return move;
    }
  };

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
    ]

    currentMoves.forEach((move) => {
      let result = knightMoveErrorHandler(move[0], move[1]);
      if (result) {
        adjacencyListOfMoves.push(result);
      }
    });

  };
  // may need to have the starting vertex for every array the given move taken
  filterVertices(start);
  return adjacencyListOfMoves;
};

console.log(knightMoves([3,3], [4,3]));