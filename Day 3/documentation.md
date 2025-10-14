Day 3 Task - 1. Create generative pattern

AIM:

My aim was to create generative pattern using basic geometric shaoes such as rectangles, ellipses, and lines. Later I randomised colors for circles, lines using random(). I even played around with randomising stroke width. The movement of the mouse controls where the yellow rectangle appears was accidental as I wanted to use mouseX and mouseY. 


STEPS:
1. Variable declaration to define the spacing between each element in the grid.
2. Assigned canvas size, lowered the framerate and removed cursor pointer using noCursor().
3. In draw function, two nested for loops divide the entire canvas into grid structure.
4. For each grid cell, a random number between 0 and 1 is generated using random(0, 1).If the random value is less than 0.5, a circle is drawn. Otherwise, a diagonal line is drawn.
5. When choice < 0.5, a yellow rectangle is drawn at the mouse’s position (mouseX, mouseY). Then a colorful circle is drawn at position (i, j) with random stroke and fill colors. The size and stroke weight vary randomly to add visual variety. When choice ≥ 0.5, a diagonal line is drawn across each grid cell.

RESULTS:

Each frame generates a new random combination of elements, making the output unpredictable and lively.

LEARNINGS:

1. Understood nested loop and if,else
2. Use of choice and random
3. How to use mouse interaction
4. Understood framerate





