function setup() {
  createCanvas(400, 400);
  background(220);
}

function mousePressed() {

  let randomSize = random(20, 100);
  drawShape(mouseX, mouseY, randomSize);
}

function draw() {
  drawShape(200, 200, 50);
}

function drawShape(x, y, size) {
  fill(200, 50, 50);
  noStroke();

  ellipse(x, y, size, size);
  ellipse(x - size, y, size, size);
  ellipse(x + size, y, size, size);
  ellipse(x, y - size, size, size);
  ellipse(x, y + size, size, size);
}
