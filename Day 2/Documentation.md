Day 2 Task - Transform 'Wonder' emotion to 'Courage' using simple animation

IDEATION:

Changing behaviour of one shape to show another emotion was completely new and challenging. Courage for me is an extreme feeling of wanting something which is beyond my reach. To achieve that, I need to go against all the odds. To show it visually I had this idea of playing with size and the direction in which these ellipses are moving. So in my final compositon, I made one ellipse go against rest of the other ellipses. 

CODING:

To create this effect, I assigned horizontal movement to each of the ellipses which simulate floating or drifting movement. All except one ellipse are moving in same direction. By using 'sin()', I showed the pulsing motion to make the shapes feel alive, like they are breathing. Assigned variables (x1, x2, x3...) so that each group moves at different pace. Using incremental motion (x1 += 1; x2 += 2;), I controlled speed. And, the reset condition (if (x1 > width) x1 = -350;) to loop all ellipses endlessly.

CHALLENGES:

- number of variables was extensively long
- adding x,y to co-ordinates of each ellipses needed constant checking of coding in order to figure out whether a single group of ellipse is moving together or not

LEARNING:

-Using incremental condition, looping and movement along x,-x direction. 
-By using simple animation, we can completely change the meaning of a composition.
