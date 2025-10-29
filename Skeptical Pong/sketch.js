let gBall;
let lPaddle, rPaddle;
let player1 = 0, player2 = 0;
let maxScore = 7; 

let gameState = 'start'; 

let fontPixel;


function preload() {
  fontPixel = loadFont('/font/BoldPixels.ttf');
  }

function setup() {
 
  createCanvas(windowWidth, windowHeight); 
  
  gBall = new Ball(width / 2, height / 2, 7, 7);

  let pWidth = 15, pHeight = 100;
  lPaddle = new Paddle(0, height / 2 - pHeight / 2, pWidth, pHeight, 10);
  rPaddle = new Paddle(width - pWidth, height / 2 - pHeight / 2, pWidth, pHeight, 10);
 
  textAlign(CENTER, CENTER);
  textSize(40);
}

function draw() {
  background(0);

  if (gameState === 'start') {
    drawIntroScreen();
  } else if (gameState === 'play') {
    playGame();
  }
}

function drawIntroScreen() {
  fill(153,51,255);
  textFont(fontPixel);
  textSize(80);
  text("Skeptial Pong", width / 2, height / 3);

  textSize(20);
  fill(255,100);
  textAlign(LEFT, CENTER);
  text("Player 1: W / S", width / 4 - 50, height / 2 + 10);
  textAlign(RIGHT, CENTER);
  text("Player 2: Up / Down", (width / 4) * 3 + 50, height / 2 + 10);

  textAlign(CENTER, CENTER);
  textSize(32);
  fill(220);
  text("Click to Play", width / 2, height - 80);
}

function playGame() {

  fill(255, 100); 
  textSize(20);
  textAlign(CENTER, CENTER);
  text(player1, width / 6, 50);
  text("player - 1", width / 6, 25);
  text(player2, (width / 6) * 5, 50);
  text("player - 2",(width / 6) * 5, 25);

  // Ball Behaviour
  gBall.move();
  gBall.checkCollisionPaddle(lPaddle);
  gBall.checkCollisionPaddle(rPaddle);
  gBall.checkCollisionWall();
  gBall.show();

  // Check score
  let point = gBall.checkWinner();
  if (point == 1) {
    player1++;
    gBall.reset();
  } else if (point == 2) {
    player2++;
    gBall.reset();
  }

  //  Check Winner
  if (player1 >= maxScore) {
    showWinner("Player 1");
  } else if (player2 >= maxScore) {
    showWinner("Player 2");
  }

  //  Paddle Behaviour
  if (keyIsDown(UP_ARROW)) {
    rPaddle.moveUp();
  } else if (keyIsDown(DOWN_ARROW)) {
    rPaddle.moveDown();
  }
  if (keyIsDown(87)) { // W key
    lPaddle.moveUp();
  } else if (keyIsDown(83)) { // S key
    lPaddle.moveDown();
  }


  lPaddle.updateSize();
  rPaddle.updateSize();

  lPaddle.show();
  rPaddle.show();
}


function showWinner(winner) {
  background(153,51,255);
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(winner + " Wins!", width / 2, height / 2);
  gameState = 'over';
  noLoop(); 
}

function mousePressed() {
  if (gameState === 'start') {
    gameState = 'play';
  }
}


//Ball Class 
class Ball {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = 20;
  }
  show() {
    noStroke();
    fill("#FF8C00");
    circle(this.x, this.y, this.size);
  }
  move() {
    this.y += this.ySpeed;
    this.x += this.xSpeed;

    if (random(1) < 0.01) {
      this.size = random(10, 30); 
    }
      
    const maxSpeed = 20; 
    if (this.xSpeed > maxSpeed) {
      this.xSpeed = maxSpeed;
    }
    if (this.xSpeed < -maxSpeed) {
      this.xSpeed = -maxSpeed;
    }
  }

  

  reset() {
    this.x = width / 2;
    this.y = height / 2;
   
    this.xSpeed = random([-7, 7]);
    this.ySpeed = random(-4, 4);
  }

  checkCollisionWall() {
    if (this.y < this.size / 2 || this.y > height - this.size / 2) {
     
      this.ySpeed = -this.ySpeed * random(0.9, 1.1);
      this.xSpeed += random(-0.5, 0.5);
    }
  }

  checkWinner() {
    if (this.x < 0 - this.size) { 
      return 2;
    } else if (this.x > width + this.size) { 
      return 1; 
    } else {
      return 0;
    }
  }

  checkCollisionPaddle(paddle) {
    
    let ballLeft = this.x - this.size / 2;
    let ballRight = this.x + this.size / 2;
    let ballTop = this.y - this.size / 2;
    let ballBottom = this.y + this.size / 2;

    let paddleLeft = paddle.x;
    let paddleRight = paddle.x + paddle.width;
    let paddleTop = paddle.y;
    let paddleBottom = paddle.y + paddle.height;

    if (
      ballLeft < paddleRight &&
      ballRight > paddleLeft &&
      ballTop < paddleBottom &&
      ballBottom > paddleTop
    ) {

      if (paddle.x === 0 && this.xSpeed < 0) {
        this.xSpeed = -this.xSpeed * 1.1;
        this.ySpeed = random(-6, 6); 

        // pingSound.play(); 
      }

     
      if (paddle.x > 0 && this.xSpeed > 0) {
        
        this.xSpeed = -this.xSpeed * 1.1;
        this.ySpeed = random(-6, 6); 

        // pingSound.play(); // Uncomment if you have the file
      }
    }
  }
}

// Paddle Class
class Paddle {
  constructor(x, y, width, height, speed) { 
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
   
    this.minSpeed = speed * 0.5; 
    this.maxSpeed = speed * 1.5; 
  }

  show() {
    noStroke();
    fill(153,51,255);
    rect(this.x, this.y, this.width, this.height,3);
  }

  moveUp() {
    if (this.y > 0) {
      this.y -= random(this.minSpeed, this.maxSpeed);
    }
  }
  moveDown() {
    if (this.y < height - this.height) {
      this.y += random(this.minSpeed, this.maxSpeed);
    }
  }

  updateSize() {
    if (random(1) < 0.01) {
      this.height = random(25, 200); 
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



