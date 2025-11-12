Day 8 – Making Pong Game using Ball and Paddle Classes

AIM:
- Create two classes — Ball and Paddle.
- Make the ball move, bounce off walls, and detect collisions with paddles.
- Keep score when the ball crosses either side of the screen.
- Add sound when the ball hits a paddle.

STEPS:
1. Define the Ball Class:

- constructor sets up each ball’s starting position , speed and size.
- show() function draws the ball using circle().
- move() function updates the ball’s position every frame.
- checkCollisionWall() function makes the ball bounce off the top and bottom edges by reversing its ySpeed.
- checkCollisionPaddle() function detects when the ball hits a paddle and reverses its xSpeed.
- checkWinner() function checks if the ball crosses the left or right edge to update the player scores.
- reset() function moves the ball back to the center after a point is scored.

2. Define the Paddle Class:

- constructor sets the paddle’s starting position, width, height, and movement speed.
- show() function draws the paddle using rect().
- moveUp() and moveDown() functions move the paddle vertically within the canvas limits.

3. Setup and Animation:

- In setup(), created the ball object gBall and two paddles lPaddle (left) and rPaddle (right).
- loaded a bounce sound in preload() using loadSound().
- In draw():
     The ball moves using move().
     Checks for wall collisions and paddle collisions. 
     If a player scores, updates their score and resets the ball. 
     Displays paddles and moves them based on key input: 
         UP and DOWN arrows for the right paddle.
         W and S keys for the left paddle.

VISUAL OUTPUT:

- A ball starts in the center and moves diagonally.
- When it hits the top or bottom wall, it bounces back.
- When it hits a paddle, it bounces in the opposite direction and plays a sound.
- When the ball crosses the left or right edge, a point is added to the other player.
- Left paddle moves with W/S, right paddle moves with ↑/↓ keys.

LEARNT:

- How to create multiple classes (Ball and Paddle) to organize game logic.
- How to use collision detection between moving objects.
- How to reverse direction by changing speed signs (xSpeed = -xSpeed).
- How to reset game elements using custom functions.
- How to handle keyboard input for two players using keyIsDown().
- How to play sounds when certain events happen (ball hitting a paddle).
- How to keep score and track game states logically.
- How to combine multiple class-based objects to create a simple two-player game system.