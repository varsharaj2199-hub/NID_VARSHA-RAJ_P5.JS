let size = 20;
function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(10);
   background(0);
   noCursor()
}

function draw() {
// background(0);
  
  for (let j = 0; j < height; j = j + size) {
   
    for (let i = 0; i < width; i = i + size) {
      let choice = random(0,1);
      if(choice<0.5) {
        fill ("yellow");
        rect(mouseX,mouseY,90);
        fill(random(150,210),0,random(120,220));
        strokeWeight(random(2,10));
        stroke(random(130,255),0,random(170,240));
        circle(i,j,size/2,size)
      } else {
        fill(100,150,200);
        line(i+size,j,i,j+size)
      }
      
    }
  }

}
