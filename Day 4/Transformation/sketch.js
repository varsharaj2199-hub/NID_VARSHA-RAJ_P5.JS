let noPetal = 8;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
drawFlower(10,0,100);
drawFlower(10,100,0);
 



function drawFlower(petals,x,y) {
   push();
//move origin
translate(x,y);
noStroke();
fill(255,0,0,100);
ellipse(0,0,80);
rotate(frameCount);

for (let i=0; i<petals; i++) {
rotate(360/petals);
fill(200,0,200,100);
noStroke();
ellipse(80,0,100,50);
}


  pop();

  }
}

