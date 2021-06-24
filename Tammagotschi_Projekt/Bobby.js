export default class Bobby {
  constructor(x, y, size, text) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.mood = "normal";
    this.chiliMouth = 15;
    this.chiliSpeed = 1;
    this.sleepMouth = 15;
    this.sleepSpeed = 1;
  }

  display() {
    push();
    translate(this.x, this.y);
    this.displayBody();
    this.displayGlas();
    this.drawMouth();
    this.displayEyes();
    this.displayBanana();
    this.displaySleep();
    this.displayChili();
    this.displayWork();
    this.displayPlay();

    pop();
  }

  //Bobby Body
  displayBody() {
    if (this.mood === "normal") {
      fill(236, 212, 101);
      background(128);
    } else if (this.mood === "banana") {
      fill(236, 212, 101);
      background(255, 235, 153);
    } else if (this.mood === "play") {
      fill(236, 212, 101);
      background(255, 230, 230);
    } else if (this.mood === "sleep") {
      fill(236, 212, 101);
      background(0, 0, 128);
    } else if (this.mood === "chili") {
      fill(236, 212, 101);
      background("red");
    } else if (this.mood === "work") {
      fill(236, 212, 10);
      background(221, 218, 217);
    }
    noStroke();
    ellipse();
    ellipse(200, 200, this.size + 5);
  }
  //Bobby Glas
  displayGlas() {
    let glasSize = 34;
    let glasSize2 = 50;
    let x = this.size / 7;
    let y = this.size / -7;
    fill(128);
    ellipse(-x + 195, y + 200, glasSize2);
    ellipse(x + 205, y + 200, glasSize2);
    fill(255);
    noStroke();
    ellipse(-x + 195, y + 200, glasSize);
    ellipse(x + 205, y + 200, glasSize);
  }
  //Bobby Eyes
  displayEyes() {
    noStroke();
    let eyeSize = 24;
    let eyeSize2 = 11;
    let eyeSize3 = 2;
    let x = this.size / 7;
    let y = this.size / -7;
    fill(115, 51, 21);
    noStroke();
    ellipse(-x + 197, y + 200, eyeSize);
    ellipse(x + 203, y + 200, eyeSize);
    fill(0);
    noStroke();
    ellipse(-x + 197, y + 200, eyeSize2);
    ellipse(x + 203, y + 200, eyeSize2);
    fill(255);
    noStroke();
    ellipse(-x + 194, y + 197, eyeSize3);
    ellipse(x + 200, y + 197, eyeSize3);
  }
  //Bobby Mouth
  drawMouth() {
    let x = this.size / 7;
  }
  //Bobbyscreen_Banana
  displayBanana() {
    if (this.mood === "banana") {
      let bananaSize = 20;
      let x = this.size / 7;
      let y = this.size / -7;

      image(bananaBubble, x - 30, y + 120, 175, 100);
      image(banana, x + 80, y + 150, 50, 50);
      fill(0);
      let smileMouth = 25;
      circle(x + 185, y + 237, smileMouth);
      fill(236, 212, 101);
      circle(x + 185, y + 233, smileMouth);
    }
  }
  //Bobbyscreen_Sleep
  displaySleep() {
    if (this.mood === "sleep") {
      let sleepEyes = 22;
      let x = this.size / 7;
      let y = this.size / -7;

      fill(236, 212, 101);
      noStroke();
      ellipse(-x + 197, y + 198, sleepEyes);
      ellipse(x + 203, y + 198, sleepEyes);
      fill(0);
      noStroke();
      ellipse(-x + 197, y + 250, this.sleepMouth);
      image(sleepyhead, x + 80, y + 77, 150, 150);
      image(sleepBubble, x + 240, y + 120, 175, 100);
    }
  }

  // Bobbyscreen_Chili
  displayChili() {
    if (this.mood === "chili") {
      let chiliEyes = 16;
      let x = this.size / 7;
      let y = this.size / -7;

      fill("red");
      noStroke();
      ellipse(-x + 197, y + 200, chiliEyes);
      ellipse(x + 203, y + 200, chiliEyes);
      fill("red");
      noStroke();
      ellipse(-x + 214, y + 245, this.chiliMouth);
      fill(255);
      let smokeSize = 15;
      let x_Smoke = this.size / 7;
      let y_Smoke = this.size / -7;
      ellipse(x_Smoke + 200, y_Smoke + 150, smokeSize);
      ellipse(x_Smoke + 190, y_Smoke + 153, smokeSize);
      ellipse(x_Smoke + 210, y_Smoke + 156, smokeSize);
      ellipse(x_Smoke + 190, y_Smoke + 150, smokeSize);
      ellipse(x_Smoke + 190, y_Smoke + 145, smokeSize);
      image(smoke, x + 78, y - 24, 200, 200);
      image(chiliBubble, x + 240, y + 120, 175, 100);
      image(chili, x + 355, y + 150, 50, 50);
    }
  }

  //Bobby_Work
  displayWork() {
    if (this.mood === "work") {
      let x = this.size / 7;
      let y = this.size / -7;

      image(workschild, x + 200, y, 250, 300);
      image(hut, x + 150, y + 50, 200, 250);
      image(hut, x + 350, y + 70, 100, 150);
      image(workBubble, x - 30, y + 120, 175, 100);
    }
  }

  //Bobby_Play
  displayPlay() {
    if (this.mood === "play") {
      let x = this.size / 7;
      let y = this.size / -7;
      image(playBubble, x - 30, y + 120, 175, 100);

      fill(0);
      let smileMouth = 25;
      circle(x + 185, y + 237, smileMouth);
      fill(236, 212, 101);
      circle(x + 185, y + 233, smileMouth);
      fill(255, 153, 153);
      ellipse(x + 185, y + 253, 10, 15);
    }
  }
}
