
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {

  let outputValue=0;
  outputValue = map(mouseX,0,width,0, 255);
  background(outputValue);

}
