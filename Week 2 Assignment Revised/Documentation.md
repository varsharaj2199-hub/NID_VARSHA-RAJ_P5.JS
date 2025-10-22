TASK: To Create 30 sec interactive narrative, "Lantern and You"

INITIAL IDEA: 

 I wanted to create a narrative of a couple where both girl and boy meets at centre of canvas and lanterns begin to arise from the bottom as they meet. However, assigning movement for both the characters became hassle and it was getting implemented for only one character.

BUILDING ON PREVIOUS IDEA:

Later, I decided to simplify it by making simple background scene transition showing different duration of a day in 5 scenes. There are two characters, one  boy and another girl. The girl is waiting for boy in the very last scene. Interaction happens by pressing right arrow key, so the boy, who appears on the first scene has to move from one frame to the very last frame. After he reaches the last frame, his movement stops when he meets the girl , initiating exchange of dialogues between these characters. At the very end, by pressing space lanterns starts to pop up from the bottom of the frame.

Narrative Element: Narrative is not very deep in this one. Inspired by lantern scene from 'Tangled' movie. I wanted to create similar scene except here the guy is trying to impress his girlfriend. 

AIM:

- was to incorporate use of map and class functions
- make use of two character sprites in a single narrative
- add background transition as character moves from one frame to another frame
- make cluster of lanterns
- add dialogues between characters

STEPS:

- preloaded images for both the sprites and all background scenes.
- divided the main character sprite into multiple frames using a nested loop for animation.
- used a variable scene that changes as the player moves right across the screen.
- added character movement by enabling controlled movement with keyIsDown(RIGHT_ARROW) and updated    frame animation using frameCount.
- added second character by positioning the girl character in the final scene to wait for the player’s arrival.
- displayed sequential dialogues when both the characers reach a certain distance from each other.
- created lantern class by defining lantern objects with random position, color, and upward floating motion using map() and sin().
- pressing space (key === ' ') activates the lanternActive flag, starting their movement.
- Intro screen: displayed title and start prompt to begin the experience with a mouse click.

RESULTS:

Integrated a sprite-based animated character, background transitions, and interactive dialogues.
Lanterns appear dynamically, giving a sense of visual reward and closure at the end of the story.

CHALLENGES FACED:

- Sprite animation:
Smooth movement of 1st sprite was difficult to achieve(which still needs to be adjusted).

- Dialogue sequence logic:
Right now dialogues repeats twice before ending. I need to figure out a way so that dialogue squence plays only once.

- Multiple object management:
Using boolean to activate lantern was tricky, as I was working with boolean for the first time. 

-Character collision detection:
Adding condition for character collision detection was difficult to calculate.

LEARNINGS:

- gained a better understanding of use of boolean, classes and arrays of objects.
- learned how to use map() and trigonometric functions (sin()) to create organic, glowing, or color-changing effects.
- how to write code in layers taking one step at a time.

FUTURE IMPROVEMENTS:

- add background music or sound effects to enhance immersion during dialogue and lantern sequences.
- making navigation through the story not so obvious. 
- improve character dialogue system 
- adding smooth transitions (fade-in/fade-out) between scene.





