let g0, g1, g2, g3, g4; // background images
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


let showIntro = true;
let showDialogue = false;
let dialogueStep = 0;
let showPrompt = false;



function preload() {
  spriteImage = loadImage('Images/1_2.png'); // sprite sheet

  // background images
  g0 = loadImage("images/0.png");
  g1 = loadImage("images/1.png");
  g2 = loadImage("images/2.png");
  g3 = loadImage("images/3.png");
  g4 = loadImage("images/4.png");


}

function setup() {
  createCanvas(innerWidth, innerHeight);

  // cutting sprite sheet 
  let w = spriteImage.width / spriteX;
  let h = spriteImage.height / spriteY;

  for (let i = 0; i < spriteY; i++) {
    sprites[i] = [];
    for (let j = 0; j < spriteX; j++) {
      sprites[i][j] = spriteImage.get(j * w, i * h, w, h);
    }
  }

  y = innerHeight - h;

  // lanterns
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

 
  if (showIntro) {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(48);
    text("Lanterns and You", width / 2, height / 2 - 30);
    textSize(20);
    text("Click to begin", width / 2, height / 2 + 30);
    return;
  }

  //backround in scenes
  if (scene === 1) image(g4, 0, 0, width, height);
  else if (scene === 2) image(g2, 0, 0, width, height);
  else if (scene === 3) image(g1, 0, 0, width, height);
  else if (scene === 4) image(g3, 0, 0, width, height);
  else if (scene === 5) image(g0, 0, 0, width, height);

  //character 1 
  image(sprites[row][count], x, y);

  // movement only if dialogue is not there
  if (!showDialogue && !showPrompt) {
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
      row = 0; // idle pose
    }

    x += xdir;
  }

  //scene change
  if (x > width) {
    if (scene < 5) {
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

  // character 2 waiting
  if (scene === 5) {
    let x2 = width / 2;
    let y2 = height / 2 + 300;

    fill(0, 200, 255);
    rect(x2, y2, 80, 120);

    // checking Character 1 meets Character 2
    if (dist(x + 50, y, x2, y2) < 80 && !showDialogue && !lanternActive) {
      showDialogue = true;
      dialogueStep = 0;
    }
  }


  if (showDialogue) {
   
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);

    if (dialogueStep === 0)
    text("Character 2: Oh, what took you so long?...Click to continue.", width / 2, 50);
    else if (dialogueStep === 1)
      text("Character 1: I was here learning how to create lanterns for you.", width / 2, 50);
    else if (dialogueStep === 2)
      text("Character 2: Did you manage to complete it?", width / 2, 50);
    else if (dialogueStep === 3)
      text("Character 1: Great, let's watch!", width / 2, 50);
    else if (dialogueStep >= 4) {
      showDialogue = false;
      showPrompt = true; 
    }

  }
  //press space for prompt
  if (showPrompt && !lanternActive) {
    fill(255);
    textSize(22);
    textAlign(CENTER);
    text("Press SPACE to watch the lanterns", width / 2,  80);
  }

  // lantern movement after space
  if (lanternActive) {
    for (let i = 0; i < lanterns.length; i++) {
      lanterns[i].move();
      lanterns[i].show();
    }
  }

  //bottomm platfprm
  fill(40, 120, 50);
  noStroke();
  rect(0, height - 40, width, 40);
}

function mousePressed() {
  
  if (showIntro) {
    showIntro = false;
    x = width / 2 - 50; // character starts bottom center
    return;
  }

  // dialogue continues
  if (showDialogue) {
    dialogueStep++;
  }
}

function keyPressed() {
 
  if (showPrompt && key === ' ') {
    lanternActive = true;
    showPrompt = false;
   
  }
}

function keyReleased() {
  row = 0;
  xdir = 0;
}
