function setup() {
  createCanvas(400, 400);
    background(220);
}


function mouseClicked() {
  if(mouseY < height/2)  
    fill("blue");
    ellipse(mouseX,mouseY,10);
  if(mouseY > height/2)
    fill("red");
    ellipse(mouseX,mouseY,10);
  }