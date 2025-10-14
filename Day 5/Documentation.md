Day 5 Task - Add animation to sprites

AIM:

1. Animate a character using a sprite sheet.
2. Allow the character to move left, right, up, and down using arrow keys.
3. How to slice a sprite sheet.

STEPS:

1. Loading images with preload().
2. Splitting a sprite sheet into individual frames.
3. Animating a sprite using frameCount.
4. Moving a character using keyboard input.
5. Handling combined key presses (e.g., Up + Right).
6. Stopping animation when no key is pressed.

VISUAL OUTPUT:

1. Character appears on the canvas with a background scene.
2. Pressing arrow keys moves the character:
3. Sprite changes frames to simulate walking.
4. Different rows of the sprite sheet represent different actions/directions.
5. Releasing the key stops the character and sets it to idle.

LEARNT:


 - how a single image can contain multiple frames of animation.
 - how to slice the image into frames using get() for animation.
 - how to animate a character by cycling through frames using frameCount.
 - how to control animation speed (frameCount % 5).
 - how to move objects on the canvas using arrow keys and key combinations.
 - the difference between keyPressed(), keyReleased(), and keyIsDown().
 - how to store and access multiple frames in a 2-dimensional array.
 - how to change animation frames based on direction or action using if and else if.
 - how to reset the animation when keys are released.
 - update an object’s position (x, y) based on speed variables (xdir, ydir).
 - combine directional movement and animation frames together.
 - combine a background and animated character to make a simple scene.
 - practiced layering shapes (rect, ellipse) behind the animated sprite.