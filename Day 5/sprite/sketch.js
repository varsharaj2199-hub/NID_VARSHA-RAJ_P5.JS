let spriteImg;
let sRows = 4, sCols = 8;
let sprites =[];
let count = 0;
let xDir=0;
let xPos=0;

function preload() {
  spriteImg = loadImage("images/1.png");
}

function setup() {
  createCanvas(innerWidth,innerHeight);
let sWidth = spriteImg.width/sCols;
let sHeight = spriteImg.height/sRows;
  //loop the sprite image and store it in a 1D array sprites

  for(let i = 0; i<sRows;i+=1) {
    for(let j = 0; j< sCols; j+=1) {

      //get that slice of the sprite
      //store it in the array sprites
     sprites[sprites.length] =
       spriteImg.get(j*sWidth,i*sHeight,sWidth,sHeight);
       console.log(sprites);
    }
  }
  
}

function draw() {
  background(0);
  image(sprites[count%(sprites.length)],0,0);

  if (isKeyPressed) {
  count++;
  xPos = xPos + xDir
  }
  
  function keyPressed()  {
    if(keyCode == 37) 
    xDir = -5;
    
    if (keyCode == 39) 
      
       xDir = +5;


  }
}
