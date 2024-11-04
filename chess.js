
function knightMoves(start,end) {

  // adjacency list graph, that will hold the edges or moves for the graph, also use as que
  let adjacencyListOfMoves = []

  function knightMoveErrorHandler(x,y) {  // handling moveset

    let move = []
    if (!(x < 0 || x > 7 || y < 0 || y > 7)) {
      move.push(x,y);
      return move;
    }
  };

  function checkCoordinate(x,y) {  // making sure we do not have a duplicate

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

      if (result && checkCoordinate(result[0],result[1])) {
        filteredVertices.push(result);
      }

    });

    if (filteredVertices.length === 0) {
      return true;
    }
    return filteredVertices;
  };

  if (start[0] === end[0] && start[1] === end[1]) {
    return ("They are the same move?!");
  }

  const initialMoves = filterVertices(start); // putting the first starting moves into que

  let currentMovePath = null;
  let currentMove = null;
  let target = false;

  for (const move of initialMoves) {
    let arr = [];
    arr.push(move);
    adjacencyListOfMoves.push(arr);
  };

  while (!(target)) {

    currentMovePath = adjacencyListOfMoves.shift(); //getting FIFO move path

    let storePath = [];
    currentMovePath.forEach((pathmove) => { // since arrays pass by reference, storing and into new array here
      storePath.push(pathmove);
    })

    currentMove = currentMovePath.pop(); // getting active move from path
    let nextValidMoves = filterVertices(currentMove); // getting the next valid moves for current move

    if (nextValidMoves !== true) {
      nextValidMoves.forEach((nextMove) => {
        let updatedPath = [];

        for (let i = 0; i < storePath.length; i++) {
          let move = storePath[i];
          if (move[0] === end[0] && move[1] === end[1]) {
            target = true;
            return; // Exits the outer function
          }
          updatedPath.push(move);
        }
  
        updatedPath.push(nextMove);
        adjacencyListOfMoves.push(updatedPath);
      });
    }
  }
  return "The shortest path is " + start + " " + currentMovePath + " " + end;
};

console.log(knightMoves([3,3], [4,3]));