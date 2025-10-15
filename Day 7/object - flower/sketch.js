let flowers = [];

function setup() {
  createCanvas(400,400);

}

function draw() {
  background(220);
    // console.log(flowers.length)
  for(let i=0; i<flowers.length; i++) {
 //check if the current mX and mY is on the flower
 

 flowers[i].changeColour(mouseX, mouseY);
   
    flowers[i].moveFlower();
    flowers[i].drawFlower();
  
  }
}

function mousePressed() {
  let tempFlower = new Flower(random(width),random(height), random(-5,5), random(-5,5));
  flowers.push(tempFlower);

}