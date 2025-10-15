class Lantern {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.size = s;
    this.speed = random(1, 3);
    this.colorPhase = random(0, 255);
  }

  show() {
    
    let r = map(sin(frameCount * 0.05 + this.colorPhase), -1, 1, 150, 255);
    let g = map(this.y, height, 0, 100, 255);
    let b = map(this.y, height, 0, 50, 200);

    fill(r, g, b, 180);
    noStroke();
    rect(this.x, this.y, this.size, this.size * 1.3);
  }

  move() {
    
    this.y -= this.speed;

    
    if (this.y < -this.size) {
      this.y = height + random(50, 200);
      this.x = random(0, width);
    }
  }
}
