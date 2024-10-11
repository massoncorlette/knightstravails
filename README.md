# knightstravials
Focusing on working with a graph of vertices, using a searching algorithm to find shortest path for horse chess piece to a chosen coordinate

We must find the shortest path from starting coordinate and ending coordinate, and 
return all the moves in between. 

Some parameters to consider:
- Piece should not go off of board

- Piece landing on target coordinate could be base case

- Need a searching algorithm to find shortest path

- Can either get height from stored moves array height or
have the height be returned recursively

Pseudo:

make the 2D graph of coordinates for the board

knightMoves(start,end)

  if the coordinates to move is out of bounds, return -1

  if the coordinates to move is on target, return -1

  add a move

  
Questions:

What can we do with the adjacency list? 
  - One idea is taking advantage of it being a 2D array
  of moves. 

  - Thinking in terms of binary search tree being similar to a graph, can enable me to think in terms of traversing a 
  graph like a tree

  - Taking into account using an array for moves as a Que,
     
     1. Make the move from start coordinate, after
     pointing to the other possible moves adding to que
     2. Is it the target coordinate?
     3. If no, point to all the next possible
     moves, and add them to Que
     4. Go back to the start coordinate, traverse to other move
      (Breadth-first search)

  

  

  