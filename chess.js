
function knightMoves(start,end) {

  // adjacency list graph, that will hold the edges or moves for the graph, also use as que
  let adjacencyListOfMoves = []

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

      if (result && checkCoordinate(result[0],result[1])) {
        filteredVertices.push(result);
      }

    });

    if (filteredVertices.length === 0) {
      return ;
    }

    return filteredVertices;
  };

  if (start[0] === end[0] && start[1] === end[1]) {
    return ("They are the same move?!");
  }

  // putting the first starting moves into que
  const initialMoves = filterVertices(start);
  let currentMovePath = null;
  let currentMove = null;
  let target = false;

  for (const move of initialMoves) {
    if (move[0] === end[0] && move[1] === end[1]) {
      currentMovePath = move;
      target = true;
      break; 
    }
    let arr = [];
    arr.push(move);
    adjacencyListOfMoves.push(arr);
  };

  while (!(target)) {

    //getting FIFO move path, and active move from the move path
    currentMovePath = adjacencyListOfMoves.shift();
    currentMove = currentMovePath.pop();

    let nextValidMoves = filterVertices(currentMove);

    if (nextValidMoves === true) {
      target = true;
    } else {
      nextValidMoves.forEach((move) => {
        let updatedPath = [];

        // since arrays pass by reference, storing and adding valid move into new array here
        currentMovePath.forEach((pathmove) => {
          updatedPath.push(pathmove);
        })

        updatedPath.push(move);
        adjacencyListOfMoves.push(updatedPath);
      })
    }
  }
  return "The shortest path is " + currentMovePath;

};

console.log(knightMoves([3,3], [2,4]));