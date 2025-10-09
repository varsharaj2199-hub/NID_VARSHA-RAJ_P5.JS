function setup() {
  createCanvas(500,500);
}

function draw() {
    background(0,0,255);
  fill("yellow")
  ellipse(250,250,500,500);
  fill("purple");
  stroke( 10,10,30);
  strokeWeight(10)
  ellipse(150,150,50,50);
  ellipse(310,150,50,50);
  line(200,300,260,300);
  noFill();
  arc(180,300,30,40,30,45);
}