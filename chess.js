
function knightMoves(start,end) {

  // adjacency list graph, that will hold the edges or moves for the graph
  let adjacencyListOfMoves = []

  let que = [];

  // handling moveset
  function knightMoveErrorHandler(x,y) {
    let move = []
    if (!(x < 0 || x > 7 || y < 0 || y > 7)) {
      move.push(x,y);
      return move;
    }
  };

  // making sure we do not have a duplicate
  function checkCoordinate(x,y) {

    for (let i=0;i<adjacencyListOfMoves.length;i++) {
      for (let j=0;j<adjacencyListOfMoves[i].length;j++) {
        if (adjacencyListOfMoves[i][j][0] === x && adjacencyListOfMoves[i][j][1] === y) {
          return false;
        }
      }
    }
    return true;
  }

  // getting,filtering,checking for duplicate coordinate,returning next possible moves
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

    let filteredVertices = [];

    currentMoves.forEach((move) => {
      let result = knightMoveErrorHandler(move[0], move[1]);
      
      if (checkCoordinate(result[0],result[1])) {
        filteredVertices.push(result);
      }
    });

    if (filteredVertices.length === 0) {
      return ;
    }

    filteredVertices.forEach((move) => {
      que.push(move);
    })
    return filteredVertices;
  };
  // putting the first starting moves into que
  const initialMoves = filterVertices(start);

  initialMoves.forEach((move) => {
    let arr = [];
    arr.push(move);
    adjacencyListOfMoves.push(arr);
  })
  return adjacencyListOfMoves;
  
};

console.log(knightMoves([3,3], [4,3]));