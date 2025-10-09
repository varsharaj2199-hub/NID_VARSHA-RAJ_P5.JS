function setup() {
  createCanvas(600, 400);
  background(220);
}

function draw() {
  circle(mouseX,mouseY,30,30);
  fill(mouseX,200,241);
  noStroke();

  circle(width-mouseX,height-mouseY,30,30);
  fill(width-mouseX,height-mouseY,200,241);
  noStroke();
}