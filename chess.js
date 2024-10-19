
function knightMoves(start,end) {

  // adjacency list graph, that will hold the edges or moves for the graph
  let adjacencyListOfMoves = []

  function knightMoveErrorHandler(x,y) {
    let move = []
    if (!(x < 0 || x > 7 || y < 0 || y > 7)) {
      move.push(x,y);
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

  };
  // may need to have the starting vertex for every array the given move taken
  let movesQue = filterVertices(start);
  console.log(movesQue);

  while (movesQue.length !== 0) {
    let currentQue = movesQue.shift();

    let nextMoves = filterVertices(currentQue);

    for (let i=0;i<nextMoves.length;i++) {
      movesQue.push(nextMoves[i]);
    }

    adjacencyListOfMoves.push(nextMoves);

    for (let i=0;i<nextMoves.length;i++) {
      if (nextMoves[i][0] === end[0] && nextMoves[i][1] === end[1]) {
        adjacencyListOfMoves.push(nextMoves);
        return adjacencyListOfMoves;
      }
    }
  }
    
};

console.log(knightMoves([3,3], [4,3]));