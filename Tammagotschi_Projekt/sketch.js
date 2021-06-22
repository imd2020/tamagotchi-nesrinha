import Bobby from "./bobby.js";
import Button from "./button.js";
import Score from "./score.js";
import Startscreen from "./startscreen.js";
let teddy = loadImage("./teddy.png");
let banana = loadImage("./banana.png");
let chili = loadImage("./chili.png");
let smoke = loadImage("./smoke.png");
let bananaBubble = loadImage("./bananaBubble.png");
let chiliBubble = loadImage("./chiliBubble.png");
let workschild = loadImage("./workschild.png");
let sleepyhead = loadImage("./sleepyhead.png");
let hut = loadImage("./hut.png");

let status = 0;

let bobby = new Bobby(100, 100, 100);
let buttonBanana = new Button(100, 590, 100, 40, "BANANA🍌");
let buttonPlay = new Button(275, 540, 100, 40, "PLAY🧸");
let buttonSleep = new Button(275, 590, 100, 40, "SLEEP💤");
let buttonChili = new Button(100, 540, 100, 40, "CHILI🌶");
let buttonWork = new Button(450, 540, 100, 40, "WORK💪🏽");
let teddypoint = new Score();
let menuscreen = new Startscreen(300, 500, 100, 40);

function draw() {
  clear();
  if (status === 0) {
    menuscreen.display();
  } else if (status === 1) {
    bobby.display();
    buttonBanana.display();
    buttonPlay.display();
    buttonSleep.display();
    buttonChili.display();
    buttonWork.display();
    bobby.chiliMouth = bobby.chiliMouth + bobby.chiliSpeed;
    bobby.sleepMouth = bobby.sleepMouth + bobby.sleepSpeed;

    if (bobby.chiliMouth === 20 || bobby.chiliMouth === 10) {
      bobby.chiliSpeed = bobby.chiliSpeed * -1;
    }

    if (bobby.sleepMouth === 20 || bobby.sleepMouth === 10) {
      bobby.sleepSpeed = bobby.sleepSpeed * -1;
    }
    image(teddy, 120, 20, 26.76 * 2, 20 * 2);
    image(teddy, 195, 20, 26.76 * 2, 20 * 2);
    image(teddy, 270, 20, 26.76 * 2, 20 * 2);
    image(teddy, 345, 20, 26.76 * 2, 20 * 2);
    image(teddy, 420, 20, 26.76 * 2, 20 * 2);
    console.log(teddypoint.teddypoint);
  } else if (status === 2) {
    background(0);
  }
}

function mouseClicked() {
  if (status === 1) {
    if (buttonBanana.hitTest()) {
      bobby.mood = "banana";
      teddypoint.add();
    } else if (buttonPlay.hitTest()) {
      bobby.mood = "play";
    } else if (buttonSleep.hitTest()) {
      bobby.mood = "sleep";
      teddypoint.add();
    } else if (buttonChili.hitTest()) {
      bobby.mood = "chili";
      teddypoint.substract();
    } else if (buttonWork.hitTest()) {
      bobby.mood = "work";
      teddypoint.add();
    } else {
      bobby.mood = "normal";
    }
    console.log(bobby.mood);
  }
  if (status === 0) {
    if (menuscreen.hitTest()) {
      status = 1;
    }
  }
}
