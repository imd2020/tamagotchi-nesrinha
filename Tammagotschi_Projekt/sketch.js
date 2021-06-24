import Bobby from "./bobby.js";
import Button from "./button.js";
import Score from "./score.js";
import Startscreen from "./startscreen.js";
import gsap from "./gsap.min.js";

// PNG Picture
let teddy = loadImage("./teddy.png");
let banana = loadImage("./banana.png");
let chili = loadImage("./chili.png");
let smoke = loadImage("./smoke.png");
let bananaBubble = loadImage("./bananaBubble.png");
let chiliBubble = loadImage("./chiliBubble.png");
let workschild = loadImage("./workschild.png");
let sleepyhead = loadImage("./sleepyhead.png");
let hut = loadImage("./hut.png");
let bobbyStart = loadImage("./bobbyStart.png");
let sleepBubble = loadImage("./sleepBubble.png");
let workBubble = loadImage("./workBubble.png");
let bobbySad = loadImage("./bobbySad.png");

//Animation
const bobbyPos = {
  y: 600,
  scale: 0.1,
};
gsap.to(bobbyPos, {
  duration: 3,
  ease: "power1.out",
  repeat: 0,
  y: 210,
  scale: 1,
  onComplete: () => {
    console.log("LetsStart");
  },
});

//Startscreen
let status = 0;

let bobby = new Bobby(100, 100, 100);
let buttonBanana = new Button(100, 620, 100, 40, "BANANA🍌");
let buttonPlay = new Button(275, 540, 100, 40, "PLAY🧸");
let buttonSleep = new Button(275, 620, 100, 40, "SLEEP💤");
let buttonChili = new Button(100, 540, 100, 40, "CHILI🌶");
let buttonWork = new Button(450, 540, 100, 40, "WORK💪🏽");
let buttonMenue = new Button(450, 620, 100, 40, "MENÜ🏠");
let teddypoint = new Score();
let menuscreen = new Startscreen(245, 600, 200, 40);
function draw() {
  clear();

  //startScreen
  if (status === 0) {
    menuscreen.display();
    image(
      bobbyStart,
      205,
      bobbyPos.y,
      13.55 * 20 * bobbyPos.scale,
      18.25 * 20 * bobbyPos.scale
    );
    image(banana, 505, 40, 50, 50);
    image(sleepyhead, 95, 10, 50, 50);
    image(teddy, 440, 190, 26.76 * 2, 20 * 2);
    image(hut, 370, 468, 100, 150);
    image(hut, 120, 468, 100, 150);
    image(chili, 260, 20, 25, 25);
    teddypoint.teddypoint = 0;
    bobby.mood = "normal";
  } //mainScreen
  else if (status === 1) {
    bobby.display();
    buttonBanana.display();
    buttonPlay.display();
    buttonSleep.display();
    buttonChili.display();
    buttonWork.display();
    bobby.chiliMouth = bobby.chiliMouth + bobby.chiliSpeed;
    bobby.sleepMouth = bobby.sleepMouth + bobby.sleepSpeed;

    //Animation for ChiliMouth
    if (bobby.chiliMouth === 20 || bobby.chiliMouth === 10) {
      bobby.chiliSpeed = bobby.chiliSpeed * -1;
    }
    //Animation for SleepMouth
    if (bobby.sleepMouth === 20 || bobby.sleepMouth === 10) {
      bobby.sleepSpeed = bobby.sleepSpeed * -1;
    }

    //Endscreen Win
  } else if (status === 2) {
    background(128);
    buttonMenue.display();
    fill(255);
    textSize(20);
    text(
      "Yeey, Bobby hat sich gut entwickelt und ist bereit dem Superschurken zu dienen. Bobby bekommt vom Superschurken ein Teddybär als Lob. Mach weiter so!👏🏻",
      75,
      275,
      500,
      500
    );
    image(bobbyStart, 175, 375, 13.96 * 20, 18.25 * 20);
  }
  //endScreen Lose
  else if (status === 3) {
    background(128);
    image(bobbySad, 175, 375, 13.96 * 20, 18.25 * 20);
    buttonMenue.display();
    fill(255);
    textSize(20);
    text(
      "Nooo, Bobby hat sich zu sehr abgelenkt und ist noch nicht bereit, dem Superschurken zu dienen...🥺",
      75,
      275,
      500,
      500
    );
  }
  //Score

  if (teddypoint.teddypoint === 5) {
    status = 2;
  } else if (teddypoint.teddypoint === -2) {
    status = 3;
  }
  for (let i = 0; i < teddypoint.teddypoint; i++) {
    image(teddy, 60 * i + 150, 30, 26.76 * 2, 20 * 2);
  }

  noFill();
  strokeWeight(10);
  stroke(0);
  rect(0, 0, 650, 675);
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
    // console.log(bobby.mood);
  }
  //Switch to Game
  if (status === 0) {
    if (menuscreen.hitTest()) {
      status = 1;
    }
  }
  //Restart
  if (buttonMenue.hitTest()) {
    status = 0;
  }
}
