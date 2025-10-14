let  g0, g1, g2, g3,g4,g5,g6;
let scene = 7;

let spriteImage, sprites =[];
let spriteX = 8, spriteY = 10;
let count = 0;
let row = 0;
let x = 0, y = 0;
let xdir = 0, ydir = 0;
let size = 100;


function preload() {

    spriteImage = loadImage('Images/1.png');

    
  g0 = loadImage("images/0.png")
  g1 = loadImage("images/1.png")
  g2 = loadImage("images/2.png")
  g3 = loadImage("images/3.png")
  g4 = loadImage("images/4.png")
  g5 = loadImage("images/5.png")
  g6 = loadImage("images/6.png")



}


function setup() {
  createCanvas(1000, 400);
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
   background(0);

  
  if (scene === 1){ image(g0, 0, 0, width, height);
  } else if (scene === 2) { image(g1, 0, 0, width, height);
  } else if (scene === 3) {image(g2, 0, 0, width, height);
  } else if (scene === 4) {image(g3, 0, 0, width, height);
  } else if (scene === 5) {image(g4, 0, 0, width, height);
  } else if (scene === 6) {image(g5, 0, 0, width, height);
  } else if (scene === 7) {image(g6, 0, 0, width, height);
  }
  
}


  

