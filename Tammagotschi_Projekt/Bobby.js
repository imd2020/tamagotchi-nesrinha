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
    // this.text = "text";
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

    pop();
  }

  displayBody() {
    if (this.mood === "normal") {
      fill(236, 212, 101);
      background(128);
    } else if (this.mood === "banana") {
      fill(236, 212, 101);
      background(255, 235, 153);
    } else if (this.mood === "play") {
      fill(236, 212, 101);
      background("green");
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

  drawMouth() {
    let x = this.size / 7;
  }
  displayBanana() {
    if (this.mood === "banana") {
      let bananaSize = 20;
      let x = this.size / 7;
      let y = this.size / -7;

      image(bananaBubble, x - 70, y + 75, 225, 150);
      image(banana, x + 90, y + 125, 50, 50);
      fill(0);
      let smileMouth = 25;
      circle(x + 185, y + 237, smileMouth);
      fill(236, 212, 101);
      circle(x + 185, y + 233, smileMouth);
    }
  }
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
    }
  }

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
      image(chiliBubble, x + 230, y + 100, 225, 150);
      image(chili, x + 390, y + 150, 50, 50);
    }
  }

  displayWork() {
    if (this.mood === "work") {
      let x = this.size / 7;
      let y = this.size / -7;

      image(workschild, x + 200, y, 250, 300);
      image(hut, x + 150, y + 50, 200, 250);
      image(hut, x + 350, y + 70, 100, 150);
      // image(bobbyStart, x, y, 200, 200);
    }
  }
}
