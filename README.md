# knightstravials
Focusing on working with a graph of vertices, using a searching algorithm to find shortest path for horse chess piece to a chosen coordinate

We must find the shortest path from starting coordinate and ending coordinate, and 
return all the moves in between. 

Some parameters to consider:
- Piece should not go off of board

- Piece landing on target coordinate could be base case

- Need a searching algorithm to find shortest path

Pseudo:

make the 2D graph of coordinates for the board

knightMoves(start,end)

  if storing moves, can use height of array for move amount

  from root get all possible moves,
  if we can go right or left, be recursive?
  the possible moves go into edge list (array)

  using a nested loop check if x high/low
    inner loop check if y high/low

  

  