let x1= 0;
let x2= 0;
let x3= 0;
let x4= 0;
let x5= 0;
let x6= 0;
let x7= 0;
let x8= 0;
let x9= 0;
let x10= 0;
let x11= 0;
let x12= 0;
let x13= 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
   background(0);
  x1 += 1;
  x2 += 2;
  x3 += 0.6;
  x4 += 0.7;
  x5 += 1;
  x6 += 2;
  x7 += 3;
  x8 += 0.2;
  x9 += 0.6;
  x10 += 1;
  x11 += 2;
  x12 += 4;
  x13 += 3;
  
  if (x1 > width) x1 = -350;   // reset to left
  if (x2 > width) x2 = -350; 
  if (x3 > width) x3 = -350; 
  if (x4 > width) x4 = -350; 
  if (x5 > width) x5 = -350; 
  if (x6 > width) x6 = -350; 
  if (x7 > width) x7 = -350; 
  if (x8 > width) x8 = -350; 
  if (x9 > width) x9 = -350; 
  if (x10 > width) x10 = -350; 
  if (x11 > width) x11 = -350; 
  if (x12> width) x12 = -350; 
  if (x13 > width) x13 = -350; 
 


  let pulse = sin(frameCount * 0.05) * 10; 

  //1
  noFill();
  ellipse(200 - x1, 250 , 230 + pulse, 230 + pulse);
  
  fill(59, 40, 96);
  ellipse(200 - x1, 250 , 189 + pulse, 189 + pulse);
  
  fill(136, 122, 183);
  ellipse(200 - x1, 250 , 185 + pulse, 185 + pulse);
  
  fill(168, 143, 200);
  ellipse(200 - x1, 250 , 85 + pulse / 2, 85 + pulse / 2);
  
  fill(199, 143, 206);
  ellipse(200 - x1, 250 , 40 + pulse / 3, 40 + pulse / 3);
  
  fill(185, 187, 226);
  ellipse(200 - x1, 250 , 20 + pulse / 4, 20 + pulse / 4);


  //2
  fill(239, 79, 117);
  ellipse(500 - x2, 150 , 170 + pulse, 170 + pulse);
  
  fill(245, 116, 97);
  ellipse(500 - x2, 150 , 90 + pulse, 90 + pulse);
  
  fill(253, 173, 150);
  ellipse(500 - x2, 150 , 70 + pulse, 70 + pulse);
  
  fill(252, 203, 198);
  ellipse(500 - x2, 150 , 40 + pulse / 2, 40 + pulse / 2);
  
  fill(255, 216, 209);
  ellipse(500 - x2, 150 , 30 + pulse / 3, 30 + pulse / 3);


  //3
  noStroke();
  fill(245, 116, 97);
  ellipse(0 - x3, 150 , 90 + pulse, 90 + pulse);
  
  fill(253, 173, 150);
  ellipse(0 - x3, 150 , 70 + pulse, 70 + pulse);
  
  fill(255, 216, 209);
  ellipse(0 - x3, 150 , 50 + pulse / 2, 50 + pulse / 2);
  
  fill(255, 200, 195);
  ellipse(0 - x3, 150 , 10 + pulse / 3, 10 + pulse / 3);


  //4
  fill(255, 237, 153);
  ellipse(100 - x4, 110 , 10 + pulse, 10 + pulse);
  
  ellipse(300 - x4, 60 , 5 + pulse / 2, 5 + pulse / 2);
  
  noStroke();
  fill(255 , 237, 153);
  ellipse(500 - x4, 300 , 3 + pulse, 3 + pulse);


  //5
  fill(2, 181, 160);
  ellipse(400 - x5, 350, 120 + pulse, 120 + pulse);
  
  fill(75, 196, 213);
  ellipse(400 - x5, 350, 110 + pulse, 110 + pulse);
  
  fill(100, 165, 187);
  ellipse(400 - x5, 350, 70 + pulse, 70 + pulse);
  
  fill(169, 221, 199);
  ellipse(400 - x5, 350, 40 + pulse, 40 + pulse);


  //6
  fill(255, 237, 153);
  ellipse(50 - x6, 250, 4 + pulse, 4 + pulse);


  //7
  fill(243, 197, 45);
  ellipse(200 - x7, 20, 70 + pulse, 70 + pulse);
  
  fill(255, 211, 92);
  ellipse(200 - x7, 20, 45 + pulse, 45 + pulse);
  
  fill(253, 215, 130);
  ellipse(200 - x7, 20, 20 + pulse, 20+ pulse);
  
  fill(255, 237, 153);
  ellipse(200 - x7, 20, 7+ pulse, 7+ pulse);

  //8
  stroke(255, 237, 153);
  fill(199, 143, 206);
  ellipse(325 + x8, 150, 40 + pulse, 40 + pulse);
  
  fill(185, 187, 226);
  ellipse(325 + x8, 150, 20 + pulse, 20 + pulse);


  //9
  fill(255, 146, 165);
  ellipse(70 - x9, 350, 43 + pulse, 43 + pulse);
  
  fill(252, 203, 198);
  ellipse(70 - x9, 350, 40 + pulse, 40 + pulse);
  
  fill(255, 216, 209);
  ellipse(70 - x9, 350, 30 + pulse, 30 + pulse);


  //10
  fill(214, 183, 67);
  ellipse(550 - x10, 370, 12 + pulse, 12 + pulse);
  
  fill(255, 196, 56);
  ellipse(550 - x10, 370, 10 + pulse, 10 + pulse);

  //11
  noFill();
  ellipse(500 - x11, 300, 50 + pulse, 50 + pulse);
  
  noFill();
  ellipse(500 - x11, 300, 160 + pulse, 160 + pulse);


  //12
  noFill();
  stroke(255, 237, 153);
  ellipse(550 - x12, 370, 30 + pulse, 30 + pulse);


  //13
  noFill();
  ellipse(200 - x13, 20, 120 + pulse, 120 + pulse);
  
  noFill();
  ellipse(200 - x13, 20, 310 + pulse, 310 + pulse);

}