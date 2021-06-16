import Bobby from "./Bobby.js";
import Button from "./Button.js";
let teddy = loadImage("./teddy.png");
let banana = loadImage("./banana.png");
let chili = loadImage("./chili.png");

let bobby = new Bobby(100, 100, 100);
// let bobbyfriend= new Bobby (200,100,100);
let buttonBanana = new Button(170, 590, 100, 40, "BANANA🍌");
let buttonPlay = new Button(350, 540, 100, 40, "PLAY🧸");
let buttonSleep = new Button(350, 590, 100, 40, "SLEEP💤");
let buttonChili = new Button(170, 540, 100, 40, "CHILI🌶");

function draw() {
  clear();
  bobby.display();
  // bobbyfriend.display();
  buttonBanana.display();
  buttonPlay.display();
  buttonSleep.display();
  buttonChili.display();

  bobby.chiliMouth = bobby.chiliMouth + bobby.chiliSpeed;

  if (bobby.chiliMouth === 20 || bobby.chiliMouth === 10) {
    bobby.chiliSpeed = bobby.chiliSpeed * -1;
  }
  image(teddy, 120, 50, 26.76 * 2, 20 * 2);
  image(teddy, 195, 50, 26.76 * 2, 20 * 2);
  image(teddy, 270, 50, 26.76 * 2, 20 * 2);
  image(teddy, 345, 50, 26.76 * 2, 20 * 2);
  image(teddy, 420, 50, 26.76 * 2, 20 * 2);
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
  } else {
    bobby.mood = "normal";
  }
  console.log(bobby.mood);
}
