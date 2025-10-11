let spriteImg ;
let sprites = [];
let sRows = 1, sCols = 7;


function preload() {
  spriteImg = loadImage("Image/1.png");
  
}

function setup() {
  createCanvas( innerWidth, innerHeight);
  let sWidth = spriteImg.width/sCols;
  let sHeight = spriteImg.height/sRows;
  

  for (let i=0; i<sRows; i+=1 ) {
     for (let j=0; j<sCols; j+=1 ) {
      sprites[sprites.length] = spriteImg.get(j*sWidth,i*sHeight,sWidth,sHeight);
      console.log(sprites);
     }
  }


}

function draw() {
  background(0);
  image(sprites[frameCount%(sprites.length)],0,0,);
  frameRate(8);
}
