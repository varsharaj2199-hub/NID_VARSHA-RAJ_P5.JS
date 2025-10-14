let spriteImage, sprites =[];
let spriteX = 8, spriteY = 10;
let count = 0;
let row = 0;
let x = 0, y = 0;
let xdir = 0, ydir = 0;
let size = 100;

function preload() {
  spriteImage = loadImage('Images/1.png');
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  
  
  let w = spriteImage.width/spriteX;
  let h = spriteImage.height/spriteY;
  

  for(let i = 0; i<spriteY;i++) {
  
    sprites[i] = [];
    
    
     for(let j = 0;j<spriteX;j++) {
      
      sprites[i][j] = spriteImage.get(j*w, i*h, w, h ); 
    }
  }
  
}

function draw() {
  background(220);
  noStroke();
  fill(173,216,230);
  rect(0,0,innerWidth,innerHeight);
  fill(0,128,128);
  ellipse(130,130,150,100);
  fill(0,111,103);
  ellipse(90,140,110,70);
  fill(115,80,61);
  rect(0,120,innerWidth,innerHeight);
  
  image(sprites[row][count],x,y);
  if(frameCount%5==0 && isKeyPressed) {
    count = (count+1)%spriteX;
    x = x+ xdir;
    y = y+ ydir;
  }
}

function keyPressed() {
  
  if(keyCode == UP_ARROW) {
    row = 4; 
    xdir = 0; 
    ydir = 0;
  } 
    if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
    row = 4;
    xdir = 18;
    ydir = 0;
     } else if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
    row = 5;
    xdir = -18;
    ydir = 0;
      } else if (keyIsDown(LEFT_ARROW) && keyIsDown(16)) {
    row = 9;
    xdir = -7;
    ydir = 0;
       } else if (keyIsDown(RIGHT_ARROW) && keyIsDown(16) ) {
    row = 8;
    xdir = 7;
    ydir = 0;
   } if(keyCode == DOWN_ARROW) {
    row = 0; 
    xdir = 0; 
    ydir = 0; 
  } else if(keyCode == RIGHT_ARROW) {
    row = 2;
    xdir = +7; 
    ydir = 0;
  } else if(keyCode == LEFT_ARROW) {
    row = 3;
    ydir = 0;
    xdir = -7; 
  }
}
  function keyReleased() {
   row = 0;
    xdir = 0;
    ydir = 0;
  
  
}