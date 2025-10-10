let x,y, size, choice;

function setup() {
  createCanvas(400, 400);
  x=0;
  y=0;
  size = 25;
  background(200,210,220);
}

function draw() {
  
  choice = random(0,1);
  if(choice<0.5) {
    stroke(random(0,255),random(0,255),random(0,255));
    strokeWeight(random( 3,5));
    line(x+size,y,x,y+size);
  } else {
    line(x,y,x+size, y+size);
  }

  x=x+size;

  if(x>width) {
    x=0;
    y=y+size;
  }


}