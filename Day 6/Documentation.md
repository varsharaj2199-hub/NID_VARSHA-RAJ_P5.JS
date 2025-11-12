Day 6 - Creating and Animating Objects with Classes 

AIM:
- Understand the concept of a Class as a blueprint for objects.
- Create a Car class to define the properties  car objects.
- Make multiple objects from the class blueprint.
- Animate the objects.

STEPS:
- Define the Car Class,using constructor, this.x,this.y, show and move
- In setup, use a for loop to create a specific number (noCar = 20) of Car objects with random starting positions and push them into the cars array.
- In draw(), iterate through the cars array using a for loop.
- For each object in the array, call its methods: cars[i].show(), cars[i].move(), and cars[i].grow().

VISUAL OUTPUT:
- Multiple Car Objects are visible on the canvas, each starting at a random position.
- Each car moves horizontal continuously from left to right.
- When a car moves off the right edge of the canvas, it instantly reappears on the left side to continue moving.
- Each car object continuously increases its size until it reaches a maximum size of 200 pixels.

LEARNT:
- What a Class is: a template or blueprint for creating objects.
- Creating Objects: using the new keyword (e.g., new Car(...)).
- The constructor: The special method used to create and initialize an object created with a class. It takes arguments to set the initial state of the object's properties.
- How to define and access properties of an object using this. within the class (e.g., this.x, this.speed).
- How to define functions inside a class (e.g., move(), show()) that define what the object does.
- How to use an array (let cars = []) to store and manage multiple objects of the same class.
- How to use a for loop in draw() to call the same methods on every object in an array, allowing them to move and change simultaneously.


