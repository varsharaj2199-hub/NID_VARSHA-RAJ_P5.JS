Day 7 - Making Flowers - moving, growing and swaying it.

AIM:

- Create a Flower class.
- Make the flowers move, grow, and react to the mouse.

STEPS:

1.Define the Flower Class:

- Made a constructor to set up each flower's starting x, y, speed, and size.
- Made drawFlower(),moveFlower(),changeColour(),growFlower(),swayFlower() functions
- Made an Array: Created an empty list let flowers = []; to hold all our flowers.

Add Flowers:

- Used mousePressed() so that every click creates a new Flower() at a random spot.
- Added each new flower to the flowers list using .push().
- To animate, In draw(), used a for loop to go through the flowers list.
- Inside the loop, I told each flower to .moveFlower(), .drawFlower(), .growFlower(), .changeColour(), .swayFlower().

VISUAL OUTPUT:

- clicking on canvas creates a new white flower appears and starts moving.
- it bounces off the screen edges.
- it slowly gets bigger.
- moving mouse over a flower, it turns red.
- it slowly sways.

LEARNT:

- Class: A blueprint for making objects.
- Object: The actual thing made from the blueprint.
- constructor: The part of the class that runs when make a new object, setting its starting properties (like x, y).
- this: A keyword to refer to the object's own properties (like this.x is this flower's x-position).

