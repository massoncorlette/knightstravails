
function knightMoves(start,end) {

  // adjacency list graph, that will hold the edges or moves for the graph
  let moves = [];

  //my Que array
  let currentMoves = [];

  let endX = end[0];
  let endY = end[1];

  let startX = start[0];
  let startY = start[1];

  let endXone = start[0] + 2;
  let endYone = start[1] + 1;

  let endXtwo = start[0] + 2;
  let endYtwo = start[1] - 1;

  let endXthree = start[0] + 1;
  let endYthree = start[1] + 2;

  let endXfour = start[0] + 1;
  let endYfour = start[1] - 2;

  let endXfive = start[0] - 2;
  let endYfive = start[1] + 1;

  let endXsix = start[0] - 2;
  let endYsix = start[1] - 1;

  let endXseven = start[0] - 1;
  let endYseven = start[1] + 2;

  let endXeight = start[0] - 1;
  let endYeight = start[1] - 2;

  function knightMoveErrorHandler(x,y) {
    if (!(startX < 0 || startX > 7 || startY < 0 || startY > 7)) {
      currentMoves.push([x,y]);
    }
  }

  knightMoveErrorHandler(startX, startY);
  knightMoveErrorHandler(endXone, endYone);
  knightMoveErrorHandler(endXtwo, endYtwo);
  knightMoveErrorHandler(endXthree, endYthree);
  knightMoveErrorHandler(endXfour, endYfour);
  knightMoveErrorHandler(endXfive, endYfive);
  knightMoveErrorHandler(endXsix, endYsix);
  knightMoveErrorHandler(endXseven, endYseven);
  knightMoveErrorHandler(endXeight, endYeight);

  
  if (startX === endX && startY === endY) {
    return currentMoves;
  }

  return currentMoves;
}

console.log(knightMoves([0,3], [3,3]));