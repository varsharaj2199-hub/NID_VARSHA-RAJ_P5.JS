function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let x = 0;
let y = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  x += 0.5;
  y += 0.3;

  if (x > width) x = -200;   // reset to left
  if (y > height) y = -200;  // reset to top

  let pulse = sin(frameCount * 0.05) * 10; 

  // ===== Group 1 (Purple cluster) =====
  noFill();
  ellipse(200 + x, 250 + y, 230 + pulse, 230 + pulse);
  fill(59, 40, 96);
  ellipse(200 + x, 250 + y, 189 + pulse, 189 + pulse);
  fill(136, 122, 183);
  ellipse(200 + x, 250 + y, 185 + pulse, 185 + pulse);
  fill(168, 143, 200);
  ellipse(200 + x, 250 + y, 85 + pulse / 2, 85 + pulse / 2);
  fill(199, 143, 206);
  ellipse(200 + x, 250 + y, 40 + pulse / 3, 40 + pulse / 3);
  fill(185, 187, 226);
  ellipse(200 + x, 250 + y, 20 + pulse / 4, 20 + pulse / 4);

  // ===== Group 2 (Coral cluster) =====
  fill(239, 79, 117);
  ellipse(500 + x, 150 + y, 170 + pulse, 170 + pulse);
  fill(245, 116, 97);
  ellipse(500 + x, 150 + y, 90 + pulse, 90 + pulse);
  fill(253, 173, 150);
  ellipse(500 + x, 150 + y, 70 + pulse, 70 + pulse);
  fill(252, 203, 198);
  ellipse(500 + x, 150 + y, 40 + pulse / 2, 40 + pulse / 2);
  fill(255, 216, 209);
  ellipse(500 + x, 150 + y, 30 + pulse / 3, 30 + pulse / 3);

  // ===== Group 3 (Edge pink planet) =====
  noStroke();
  fill(245, 116, 97);
  ellipse(0 + x, 150 + y, 90 + pulse, 90 + pulse);
  fill(253, 173, 150);
  ellipse(0 + x, 150 + y, 70 + pulse, 70 + pulse);
  fill(255, 216, 209);
  ellipse(0 + x, 150 + y, 50 + pulse / 2, 50 + pulse / 2);
  fill(255, 200, 195);
  ellipse(0 + x, 150 + y, 10 + pulse / 3, 10 + pulse / 3);

  // ===== Group 4 & 5 (Tiny yellow sparks) =====
  fill(255, 237, 153);
  ellipse(100 - x, 110 - y, 10 + pulse, 10 + pulse);
  ellipse(300 - x, 60 - y, 5 + pulse / 2, 5 + pulse / 2);
   //_______
  noStroke();
  fill(255 , 237, 153);
  ellipse(500 + x, 300 + y, 3 + pulse, 3 + pulse);
  //_______
  fill(2, 181, 160);
  ellipse(400 + x, 350+ y, 120 + pulse, 120 + pulse);
  fill(75, 196, 213);
  ellipse(400 + x, 350+ y, 110 + pulse, 110 + pulse);
  fill(100, 165, 187);
  ellipse(400 + x, 350+ y, 70 + pulse, 70 + pulse);
  fill(169, 221, 199);
  ellipse(400 + x, 350+ y, 40 + pulse, 40 + pulse);
  //_______
  fill(255, 237, 153);
  ellipse(50 + x, 250+ y, 4 + pulse, 4 + pulse);
  //______
  fill(243, 197, 45);
  ellipse(200 + x, 20+ y, 70 + pulse, 70 + pulse);
  fill(255, 211, 92);
  ellipse(200 + x, 20+ y, 45 + pulse, 45 + pulse);
  fill(253, 215, 130);
  ellipse(200 + x, 20+ y, 20 + pulse, 20+ pulse);
  fill(255, 237, 153);
  ellipse(200 + x, 20+ y, 7+ pulse, 7+ pulse);
  //_______
  stroke(255, 237, 153);
  fill(199, 143, 206);
  ellipse(325 + x, 150+ y, 40 + pulse, 40 + pulse);
  fill(185, 187, 226);
  ellipse(325 + x, 150+ y, 20 + pulse, 20 + pulse);
  //_______
  fill(255, 146, 165);
  ellipse(70 + x, 350+ y, 43 + pulse, 43 + pulse);
  fill(252, 203, 198);
  ellipse(70 + x, 350+ y, 40 + pulse, 40 + pulse);
  fill(255, 216, 209);
  ellipse(70 + x, 350+ y, 30 + pulse, 30 + pulse);
  //________
  fill(214, 183, 67);
  ellipse(550 + x, 370+ y, 12 + pulse, 12 + pulse);
  fill(255, 196, 56);
  ellipse(550 + x, 370+ y, 10 + pulse, 10 + pulse);
  //________
  noFill();
  ellipse(500 + x, 300+ y, 50 + pulse, 50 + pulse);
  noFill();
  ellipse(500 + x, 300+ y, 160 + pulse, 160 + pulse);
  stroke(255, 237, 153);
  //________
  noFill();
  stroke(255, 237, 153);
  ellipse(550 + x, 370+ y, 30 + pulse, 30 + pulse);
  //________
  noFill();
  ellipse(200 + x, 20+ y, 120 + pulse, 120 + pulse);
  noFill();
  ellipse(200 + x, 20+ y, 310 + pulse, 310 + pulse);
}


