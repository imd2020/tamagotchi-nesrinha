import Bobby from "./Bobby.js";
import Button from "./Button.js";
import Score from "./score.js";
let teddy = loadImage("./teddy.png");
let banana = loadImage("./banana.png");
let chili = loadImage("./chili.png");
let smoke = loadImage("./smoke.png");
let bananaBubble = loadImage("./bananaBubble.png");

let bobby = new Bobby(100, 100, 100);
// let bobbyfriend= new Bobby (200,100,100);
let buttonBanana = new Button(100, 590, 100, 40, "BANANA🍌");
let buttonPlay = new Button(275, 540, 100, 40, "PLAY🧸");
let buttonSleep = new Button(275, 590, 100, 40, "SLEEP💤");
let buttonChili = new Button(100, 540, 100, 40, "CHILI🌶");
let buttonWork = new Button(450, 540, 100, 40, "WORK💪🏽");
let teddypoint = new Score();

function draw() {
  clear();
  bobby.display();
  // bobbyfriend.display();
  buttonBanana.display();
  buttonPlay.display();
  buttonSleep.display();
  buttonChili.display();
  buttonWork.display();
  buttonBanana.point = 0;
  console.log(buttonBanana.point);
  bobby.chiliMouth = bobby.chiliMouth + bobby.chiliSpeed;

  if (bobby.chiliMouth === 20 || bobby.chiliMouth === 10) {
    bobby.chiliSpeed = bobby.chiliSpeed * -1;
  }
  image(teddy, 120, 20, 26.76 * 2, 20 * 2);
  image(teddy, 195, 20, 26.76 * 2, 20 * 2);
  image(teddy, 270, 20, 26.76 * 2, 20 * 2);
  image(teddy, 345, 20, 26.76 * 2, 20 * 2);
  image(teddy, 420, 20, 26.76 * 2, 20 * 2);
  // console.log(teddypoint.teddypoint);
}

function mouseClicked() {
  if (buttonBanana.hitTest()) {
    bobby.mood = "banana";
  } else if (buttonPlay.hitTest()) {
    bobby.mood = "play";
  } else if (buttonSleep.hitTest()) {
    bobby.mood = "sleep";
  } else if (buttonChili.hitTest()) {
    bobby.mood = "chili";
    // teddypoint.teddypoint--;
  } else if (buttonWork.hitTest()) {
    bobby.mood = "work";
  } else {
    bobby.mood = "normal";
  }
  console.log(bobby.mood);
}
