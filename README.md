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


New Pseudo (10/17): Going to write the most english step by step operations

1. Get the possible moves from starting coordinate, store in Que

2. We will then need to check all those possible next moves for target

3. If none are the target, we can go to the first next move in Que

  1. Store the possible moves from starting coordinate

  2. Check all those possible moves

  3. If none are target, go to next move inside Que

-----------

check for target, if no target, go to next Que

filter and push moves into adjacency list












Old Pseudo:

initialize adjacency list moves[]

initialize current moves

get the starting and target 
coordinates

if piece goes off board, exit

if the coordinates match return moves array for base case

push moves

change array coordinates 


push all the possible moves into que,
then push that que into the adjacency list,
every vertex is the given move - the vertices are possible
moves
  
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


Since this is a breadth search, this may not call for recursion, we 
should be able to get to the coordinates with maybe just a while loop 
and conditionals. Storing the previous moves still serves tricky


1. Want to first check we are not on the 
coordinate

2. Then want to store all the 
possible moves from that spot in Que.

3. We then want to go to the first in Que.

4. Repeat first 3 steps


 First I have my error handling for if piece goes off board, than my base case for when target coordinate is found. Then I will check x+2 y+1, x+1 y+2, etc ...For the move I am on now, I will check if the current coordinate I am on it the target, if not I will go ahead and account for the next possible moves and store them as vertices for the current vertix(coordinate) in the list. Traversing to next possible move for current coordinate..

New Pseudo Using Que and While Loop:

initalize adjacency list and currentMoves Que array

get and assign coordinates to variables

error handling for moves going off board

while the coordinates do not equal eachother


1. We have vertex which is every possible move, each vertex has
it's vertices (possible moves)

2. So for every move we have possible moves

3. We can place those moves into the adjacency list

4. We must do a BFS search in order to put data into list

5. The list will have the shortest path







  

  

  