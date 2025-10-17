let g0, g1, g2, g3, g4, g5, g6; // background images
let scene = 1;

let spriteImage, sprites = [];
let spriteX = 8, spriteY = 10;
let count = 0;
let row = 0;
let x = 0, y = 0;
let xdir = 0, ydir = 0;

let lanterns = [];
let noLantern = 40;
let lanternActive = false;

function preload() {
  spriteImage = loadImage('Images/1_2.png'); // sprite sheet

  // background images
  g0 = loadImage("images/0.png");
  g1 = loadImage("images/1.png");
  g2 = loadImage("images/2.png");
  g3 = loadImage("images/3.png");
  g4 = loadImage("images/4.png");
  g5 = loadImage("images/5.png");
  g6 = loadImage("images/6.png");
}

function setup() {
  createCanvas(innerWidth, innerHeight);

  // cut sprite sheet into frames
  let w = spriteImage.width / spriteX;
  let h = spriteImage.height / spriteY;

  for (let i = 0; i < spriteY; i++) {
    sprites[i] = [];
    for (let j = 0; j < spriteX; j++) {
      sprites[i][j] = spriteImage.get(j * w, i * h, w, h);
    }
  }

  
  y = innerHeight - h ;

  
  for (let i = 0; i < noLantern; i++) {
    let tempLantern = new Lantern(
      random(0, width),
      random(height, height + 300),
      random(30, 60)
    );
    lanterns.push(tempLantern);
  }
}

function draw() {
  background(0);

  // scene backgrounds
  if (scene === 1) image(g6, 0, 0, width, height);
  else if (scene === 2) image(g5, 0, 0, width, height);
  else if (scene === 3) image(g2, 0, 0, width, height);
  else if (scene === 4) image(g3, 0, 0, width, height);
  else if (scene === 5) image(g1, 0, 0, width, height);
  else if (scene === 6) image(g4, 0, 0, width, height);
  else if (scene === 7) image(g0, 0, 0, width, height);

  
  fill(40, 120, 50);
  noStroke();
  rect(0, height - 40, width, 40);

  // sprite
  image(sprites[row][count], x, y);

 
  if (keyIsDown(RIGHT_ARROW)) {
    row = 6;
    xdir = 10;
    if (frameCount % 5 === 0) count = (count + 1) % spriteX;
  } else if (keyIsDown(LEFT_ARROW)) {
    row = 7;
    xdir = -10;
    if (frameCount % 5 === 0) count = (count + 1) % spriteX;
  } else {
    xdir = 0;
  }

  x += xdir;


  if (scene === 1 && x < 0) x = 0;

  
  if (x > width) {
    if (scene < 7) {
      scene++;
      x = 0;
    } else {
      x = width - 50;
    }
  }

  if (x < 0 && scene > 1) {
    scene--;
    x = width - 50;
  }

  
  if (scene === 7) {
    lanternActive = true;
  }

  
  if (lanternActive) {
    for (let i = 0; i < lanterns.length; i++) {
      lanterns[i].move();
      lanterns[i].show();
    }
  }


  fill(40, 120, 50);
  noStroke();
  rect(0, height - 40, width, 40);

}

function keyReleased() {
  row = 0;
  xdir = 0;
}