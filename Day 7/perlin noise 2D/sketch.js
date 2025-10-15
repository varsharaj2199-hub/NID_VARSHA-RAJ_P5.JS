function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for(let i=0; i< width; i+= 5) {
    for( let j=0;  j < height; j+= 5) {
      let outputNoise = noise(0.005*(i+frameCount),0.005*(j+frameCount));
      fill(outputNoise*255);
      noStroke();
      rect(i,j,5,5);


    }
  }

}
