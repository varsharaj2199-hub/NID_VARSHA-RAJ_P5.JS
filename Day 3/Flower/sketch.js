let x,y;
function setup() {
  createCanvas(400, 400);
  background(220);
  x = width/2;
  y = height/2;
}

function draw() {
background(220);
drawFlower(x,y);
}

function drawFlower() {
  noStroke();
  fill(255, 150, 200);
  ellipse(x,y,100);
  ellipse(x-50,y,100);
  ellipse(x,y-50,100);
  ellipse(x+50,y,100);
  ellipse(x,y+50,100);
  fill(255, 200, 0);        
  ellipse(x, y, 50);
}

