let size = 50, g0, g1, g2, g3;

function preload() {
  g0 = loadImage("images/0.jpg")
  g1 = loadImage("images/1.JPG")
  g2 = loadImage("images/2.jpg")
  g3 = loadImage("images/3.jpg")

}


function setup() {
  createCanvas(400, 400);
  frameRate(5);
  
}

function draw() {
  background(220);
  //nested for loop
  for (let i = 0; i < width; i = i + size) {
    for (let j = 0; j < height; j = j + size) {



      let choice = floor(random(0, 4));
      if (choice == 1) {
        image(g0, i, j);
      } else if (choice == 2) {
        image(g1, i, j);
      } else if (choice == 3) {
        image(g2, i, j);
      } else {
        image(g3, i, j);
      }

    }
  }

}

