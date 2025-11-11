let scene = 0;
let diyas = [];
let litCount = 0;
let sparkParticles = [];
let phuljhariParticles = [];

// fade and lantern scene
let fadeAlpha = 0;
let fadeOut = false;
let lantern = { x: 0, y: 0, dragging: false, released: false };

// background images
let bgIntro, bgLantern, bgDiyas, bgMeet, bgScene4;
let handImg;

// mother sprite variables
let motherSpriteSheet;
let motherFrames = [];
let motherFrameIndex = 0;
let motherFrameCount = 8; // columns
let motherFrameWidth = 3000 / 8;
let motherFrameHeight = 950;
let motherAnimSpeed = 8;

// daughter sprite variables
let daughterSpriteSheet;
let daughterFrames = [];
let daughterFrameIndex = 0;
let daughterFrameCount = 10; // columns
let daughterFrameWidth = 4000 / 10;
let daughterFrameHeight = 600;
let daughterAnimSpeed = 10;

// mother movement
let motherX = 150;
let motherY;
let moveRight = false;
let moveSpeed = 4;

// daughter movement variables
let daughterX;
let daughterY;
let daughterMoveLeft = false;
let daughterMoveSpeed = 4;
let daughterStop = false;

// text typing (now replaced by fade-in/out)
let storyTexts = [];
let currentText = "";
let textAlpha = 0;
let textFadeIn = true;
let textFadeOut = false;
let textTyped = false;

// sparkle timer
let sparkleTimer = 0;
let sparkleDuration = 120; // frames (~2 seconds)
let scene4Fade = false;
let scene4FadeAlpha = 0;

// scene 4 phuljhari text
let scene4TextAlpha = 0;
let scene4TextShown = false;
let scene4TextTimer = 0;

// end scene
let endScene = false;
let endSceneAlpha = 0;
let endSceneTimer = 0;

// sound
let mySound;

// ---------------------- PRELOAD ----------------------
function preload() {
  bgIntro = loadImage("assets/bg1.jpg");
  bgLantern = loadImage("assets/bg2.jpg");
  bgDiyas = loadImage("assets/bg3.jpg");
  bgMeet = loadImage("assets/bg4.jpg");
  bgScene4 = loadImage("assets/bg1.jpg"); // Scene 4 background
  handImg = loadImage("assets/hand.png");

  motherSpriteSheet = loadImage("assets/motherSheet.png");
  daughterSpriteSheet = loadImage("assets/daughterSheet.png");

  mySound = loadSound("assets/bgmusic.mp3");
}

// ---------------------- SETUP ----------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Georgia");
  mySound.loop();

  // slice mother sprite sheet
  motherSpriteSheet.loadPixels();
  for (let i = 0; i < motherFrameCount; i++) {
    let frame = motherSpriteSheet.get(
      i * motherFrameWidth,
      0,
      motherFrameWidth,
      motherFrameHeight
    );
    motherFrames.push(frame);
  }

  // slice daughter sprite sheet
  daughterSpriteSheet.loadPixels();
  for (let i = 0; i < daughterFrameCount; i++) {
    let frame = daughterSpriteSheet.get(
      i * daughterFrameWidth,
      0,
      daughterFrameWidth,
      daughterFrameHeight
    );
    daughterFrames.push(frame);
  }

  motherY = height - motherFrameHeight / 1.25;

  let scaleFactorD = 0.8;
  daughterX = width;
  daughterY = height - daughterFrameHeight / scaleFactorD + 80;

  diyas.push({ x: width / 11.3, y: height / 2 - 90, lit: false });
  diyas.push({ x: width / 2.54, y: height / 2 - 100, lit: false });
  diyas.push({ x: width - width / 3.4, y: height / 2 - 125, lit: false });

  // --- UPDATED: Narrative Text ---
  storyTexts = [
    "Every Diwali feels the same —lamps, laughter, and light. But this year, something in the air felt slower… like time had been whispering all along.", // Scene 1
    "Her hands tremble slightly as she lights the lantern. I see the years in her eyes .", // Scene 2
    "The same eyes that once watched me chase sparks. I used to be her reason to hurry." // Scene 3
  ];
  // --- End Update ---
}

// ---------------------- DRAW ----------------------
function draw() {
  if (scene === 0) showIntro();
  else if (scene === 1) sceneLantern();
  else if (scene === 2) sceneOne();
  else if (scene === 3) sceneTwo();
  else if (scene === 4) sceneFour();

  if (scene > 0 && scene <= 3) displayStoryText();
}

// ---------------------- INTRO ----------------------
function showIntro() {
  cursor(ARROW);
  image(bgIntro, 0, 0, width, height);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(62);
  text("Time Flies By...", width / 2, height / 2 - 60);
  textSize(18);
  text("Click to begin", width / 2, height / 2 + 80);
}

// ---------------------- FADE TEXT ----------------------
function displayStoryText() {
  if (textFadeIn) {
    textAlpha = min(textAlpha + 3, 255);
    if (textAlpha === 255) {
      textFadeIn = false;
      textFadeOut = false;
      textTyped = true; // mark as shown
    }
  }
  if (textFadeOut) {
    textAlpha = max(textAlpha - 5, 0);
  }

  if (textAlpha > 0) {
    fill(190, textAlpha,);
    textFont("Georgia");
    textSize(20);
    textAlign(CENTER);
    text(currentText, width / 2, height - 80);
  }
}

// ---------------------- SET SCENE ----------------------
function setScene(newScene) {
  scene = newScene;
  if (newScene > 0 && newScene <= 3) {
    currentText = storyTexts[newScene - 1] || "";
    textAlpha = 0;
    textFadeIn = true;
    textFadeOut = false;
    textTyped = false;
  } else {
    // For scene 4 or 0
    currentText = "";
    textAlpha = 0;
  }
  if (scene === 1) setupLanternScene();
}

// ---------------------- SCENE 1: LANTERN ----------------------
function setupLanternScene() {
  lantern.x = width / 2.1;
  lantern.y = height - 450;
  lantern.dragging = false;
  lantern.released = false;
}

function sceneLantern() {
  cursor(ARROW);
  image(bgLantern, 0, 0, width, height);

  let flicker = random(-15, 15);
  let baseColor = color(255, 240, 190 + flicker);
  let glowColor = color(255, 220, 150, 80 + flicker);

  if (!lantern.released) {
    drawLanternWithHalo(lantern.x, lantern.y, baseColor, glowColor);
  } else {
    lantern.y -= 2;
    drawLanternWithHalo(lantern.x, lantern.y, baseColor, glowColor);
  }

  if (lantern.released && lantern.y < -100) {
    fadeOut = true;
    textFadeOut = true;
  }

  if (fadeOut) {
    fadeAlpha += 4;
    rectMode(CORNER);
    fill(0, fadeAlpha);
    rect(0, 0, width, height);
    if (fadeAlpha >= 255) {
      fadeAlpha = 0;
      fadeOut = false;
      setScene(2);
    }
  }
}

function drawLanternWithHalo(x, y, baseColor, glowColor) {
  rectMode(CENTER);
  noStroke();

  for (let i = 0; i < 4; i++) {
    fill(255, 230, 150, 40 - i * 8);
    let w = 120 + i * 25 + sin(frameCount * 0.08) * 5;
    let h = 140 + i * 25 + cos(frameCount * 0.08) * 5;
    rect(x, y, w, h, 25);
  }

  fill(baseColor);
  stroke(255, 240, 180);
  strokeWeight(2);
  rect(x, y, 90, 110, 20);

  noStroke();
  fill(glowColor);
  rect(x, y, 60, 85, 15);

  let flick = random(10, 18);
  fill(255, 200, 100, 180);
  rect(x, y + 30, 12, flick, 5);
}

// ---------------------- SCENE 2: LIGHT FLAMES ----------------------
function sceneOne() {
  noCursor();
  image(bgDiyas, 0, 0, width, height);

  for (let d of diyas) {
    let flameX = d.x;
    let flameY = d.y - 35;

    if (dist(mouseX, mouseY, flameX, flameY) < 50 && mouseIsPressed && !d.lit) {
      d.lit = true;
      litCount++;
    }

    if (d.lit) {
      noStroke();
      let pulse = sin(frameCount * 0.1 + d.x);
      let haloSize1 = map(pulse, -1, 1, 48, 55);
      let haloAlpha1 = map(pulse, -1, 1, 70, 90);
      let haloSize2 = map(pulse, -1, 1, 68, 75);
      let haloAlpha2 = map(pulse, -1, 1, 50, 65);

      fill(255, 200, 50, haloAlpha1);
      ellipse(flameX, flameY, haloSize1, haloSize1);
      fill(255, 200, 50, haloAlpha2);
      ellipse(flameX, flameY, haloSize2, haloSize2);

      let flameW = 15 + random(-1, 1);
      let flameH = 25 + random(-2, 2);
      fill(255, 180, 0);
      ellipse(flameX, flameY, flameW, flameH);
    }
  }

  image(handImg, mouseX - 50, mouseY - 50, handImg.width, handImg.height);

  if (fadeOut) {
    fadeAlpha += 4;
    rectMode(CORNER);
    fill(0, fadeAlpha);
    rect(0, 0, width, height);
    if (fadeAlpha >= 255) {
      fadeAlpha = 0;
      fadeOut = false;
      setScene(3);
    }
  }
}

// ---------------------- SCENE 3: MOTHER + DAUGHTER + SPARKLE ----------------------
function sceneTwo() {
  cursor(ARROW);
  image(bgMeet, 0, 0, width, height);

  let scaleFactorM = 1.2;
  let scaleFactorD = 0.8;

  // Mother movement
  if (moveRight && motherX < width / 2 - motherFrameWidth / 3) {
    motherX += moveSpeed;
    if (frameCount % motherAnimSpeed === 0) {
      motherFrameIndex = (motherFrameIndex + 1) % motherFrames.length;
    }
  } else {
    motherFrameIndex = 0;
    moveRight = false;
  }

  image(
    motherFrames[motherFrameIndex],
    motherX,
    motherY,
    motherFrameWidth / scaleFactorM,
    motherFrameHeight / scaleFactorM
  );

  // Daughter movement
  let motherRightEdge = motherX + motherFrameWidth / scaleFactorM;
  let targetX = motherRightEdge - 120;

  if (daughterMoveLeft && !daughterStop) {
    if (daughterX > targetX) {
      daughterX -= daughterMoveSpeed;
      if (frameCount % daughterAnimSpeed === 0) {
        daughterFrameIndex = (daughterFrameIndex + 1) % daughterFrames.length;
      }
    } else {
      daughterX = targetX;
      daughterMoveLeft = false;
      daughterStop = true;
      daughterFrameIndex = 0;
      sparkleTimer = frameCount;
    }
  }

  image(
    daughterFrames[daughterFrameIndex],
    daughterX,
    daughterY,
    daughterFrameWidth / scaleFactorD,
    daughterFrameHeight / scaleFactorD
  );

  // Generate sparkles
  if (daughterStop && frameCount - sparkleTimer < sparkleDuration) {
    for (let i = 0; i < 3; i++) {
      sparkParticles.push({
        x: motherX + motherFrameWidth / scaleFactorM / 2 + 100 + random(-20, 20),
        y: motherY + 275 + random(-10, 10),
        vx: random(-2, 2),
        vy: random(-4, -1),
        alpha: 255,
        size: random(3, 6)
      });
    }
  } else if (daughterStop && frameCount - sparkleTimer >= sparkleDuration) {
    scene4Fade = true;
  }

  // Draw sparkles
  for (let i = sparkParticles.length - 1; i >= 0; i--) {
    let p = sparkParticles[i];
    fill(255, 200, 50, p.alpha);
    noStroke();
    ellipse(p.x, p.y, p.size);

    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 6;
    p.size *= 0.95;

    if (p.alpha <= 0) sparkParticles.splice(i, 1);
  }

  // Scene 4 fade
  if (scene4Fade) {
    scene4FadeAlpha += 3;
    fill(0, scene4FadeAlpha);
    rect(0, 0, width, height);
    if (scene4FadeAlpha >= 255) {
      scene4FadeAlpha = 0;
      scene4Fade = false;
      setScene(4);
    }
  }

  // Narrative text (and instructions)
  if (textTyped) {
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text(currentText, width / 2, height - 80); // Shows Scene 3 text
    textSize(18);
    // Only show instructions if daughter hasn't stopped
    if(!daughterStop) {
      text("Press D to walk →  /  ← Press Left Arrow", width / 2, height - 40);
    }
  }
}

// ---------------------- SCENE 4: FINAL IMAGE + PHULJHARI ----------------------
function sceneFour() {
  image(bgScene4, 0, 0, width, height);
  noCursor();
  // PHULJHARI effect
  for (let i = 0; i < 2; i++) {
    phuljhariParticles.push({
      x: mouseX + random(-5, 5),
      y: mouseY + random(-5, 5),
      vx: random(-1.5, 1.5),
      vy: random(-2, -0.5),
      alpha: 255,
      size: random(2, 5)
    });
  }

  for (let i = phuljhariParticles.length - 1; i >= 0; i--) {
    let p = phuljhariParticles[i];
    fill(255, 200, 50, p.alpha);
    noStroke();
    ellipse(p.x, p.y, p.size);

    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 5;
    p.size *= 0.95;

    if (p.alpha <= 0) phuljhariParticles.splice(i, 1);
  }

  // --- UPDATED: Scene 4 Text ---
  let scene4Text = "Now, I must learn to slow down for her.";
  
  // Text after delay
  if (!scene4TextShown) {
    if (scene4TextTimer === 0) scene4TextTimer = frameCount;

    if (frameCount - scene4TextTimer > 120) {
      scene4TextAlpha = min(scene4TextAlpha + 2, 255);
      fill(255, scene4TextAlpha);
      textAlign(CENTER, CENTER);
      textSize(28);
      text(scene4Text, width / 2, height / 2);

      if (scene4TextAlpha >= 255) {
        scene4TextShown = true;
        endSceneTimer = frameCount;
      }
    }
  } else {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(28);
    text(scene4Text, width / 2, height / 2);

    if (!endScene && frameCount - endSceneTimer > 180) endScene = true;
  }

  // END SCENE FADE
  if (endScene) {
    endSceneAlpha = min(endSceneAlpha + 3, 255);
    fill(0, endSceneAlpha);
    rect(0, 0, width, height);

    if (endSceneAlpha >= 255) {
     
    
      // --- UPDATED: End Scene Text ---
      textSize(28);
      text("“Time flies by —", width / 2, height / 2 + 50); // Using \n for line break
      
       fill(255);
      textAlign(CENTER, CENTER);
      textSize(40);
      text("Thank You!", width / 2, height / 2 - 30);

      textSize(18);
      text("Click anywhere to restart", width / 2, height / 2 + 150);
      // --- End Update ---
    }
  }
}

// ---------------------- INPUTS ----------------------
function mousePressed() {
  if (endScene && endSceneAlpha >= 255) {
    // RESET EVERYTHING
    scene = 0;
    litCount = 0;
    diyas.forEach(d => d.lit = false);
    motherX = 150;
    daughterX = width;
    daughterStop = false;
    moveRight = false;
    daughterMoveLeft = false;
    sparkParticles = [];
    phuljhariParticles = [];
    scene4TextAlpha = 0;
    scene4TextShown = false;
    scene4TextTimer = 0;
    endScene = false;
    endSceneAlpha = 0;
    endSceneTimer = 0;
    textTyped = false;
  }

  if (scene === 0) setScene(1);
  else if (scene === 1 && textTyped && dist(mouseX, mouseY, lantern.x, lantern.y) < 50 && !lantern.released) {
    lantern.dragging = true;
  } else if (scene === 2 && litCount === diyas.length && textTyped) {
    fadeOut = true;
    textFadeOut = true;
  }
}

function mouseDragged() {
  if (scene === 1 && lantern.dragging && textTyped) {
    lantern.y = mouseY;
  }
}

function mouseReleased() {
  if (scene === 1 && lantern.dragging) {
    lantern.dragging = false;
    if (lantern.y < height / 2) lantern.released = true;
  }
}

// --- KEYBOARD INPUTS ---
function keyPressed() {
  if (scene === 3 && (key === "d" || key === "D")) moveRight = true;
  else if (scene === 3 && key === "ArrowLeft" && !daughterStop) daughterMoveLeft = true;
}

function keyReleased() {
  if (scene === 3 && (key === "d" || key === "D")) moveRight = false;
  else if (scene === 3 && key === "ArrowLeft") daughterMoveLeft = false;
}

// ---------------- RESIZE ----------------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  motherY = height - motherFrameHeight / 1.25;

  let scaleFactorD = 0.8;
  daughterX = width;
  daughterY = height - daughterFrameHeight / scaleFactorD + 80;
  daughterMoveLeft = false;
  daughterStop = false;

  diyas[0] = { x: width / 11.3, y: height / 2 - 90, lit: diyas[0].lit };
  diyas[1] = { x: width / 2.54, y: height / 2 - 100, lit: diyas[1].lit };
  diyas[2] = { x: width - width / 3.4, y: height / 2 - 125, lit: diyas[2].lit };

  if (scene === 1 && !lantern.released) setupLanternScene();
}