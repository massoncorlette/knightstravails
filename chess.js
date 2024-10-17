
function knightMoves(start,end) {

  // adjacency list graph, that will hold the edges or moves for the graph
  let moves = [];

  // my Que array
  let currentMoves = [
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

  function returnVertices() {
    currentMoves.forEach((move) => knightMoveErrorHandler(move[0],move[1]));

    return moves;
  }

  function checkVertices() {
    for (let i=0;i<moves.length;i++) {
      if (moves[i][0] === end[0] && moves[i][1] === end[1]) {
        return end;
      }
    }
  }
  returnVertices();
  return checkVertices();
  

}

console.log(knightMoves([0,3], [2,4]));