function setup() {
  let canvas = createCanvas(650, 675);
  frameRate(30);
}
window.setup = setup;

let teddy;
let banana;
let chili;
let smoke;
let bananaBubble;
let chiliBubble;
let workschild;
let sleepyhead;
let hut;
let bobbyStart;
let sleepBubble;
let workBubble;
let bobbySad;
let playBubble;

function preload() {
  // PNG Picture
  teddy = loadImage("./teddy.png");
  banana = loadImage("./banana.png");
  chili = loadImage("./chili.png");
  smoke = loadImage("./smoke.png");
  bananaBubble = loadImage("./bananaBubble.png");
  chiliBubble = loadImage("./chiliBubble.png");
  workschild = loadImage("./workschild.png");
  sleepyhead = loadImage("./sleepyhead.png");
  hut = loadImage("./hut.png");
  bobbyStart = loadImage("./bobbyStart.png");
  sleepBubble = loadImage("./sleepBubble.png");
  workBubble = loadImage("./workBubble.png");
  bobbySad = loadImage("./bobbySad.png");
  playBubble = loadImage("./playBubble.png");
}

export {
  teddy,
  banana,
  chili,
  smoke,
  bananaBubble,
  chiliBubble,
  workschild,
  sleepyhead,
  hut,
  bobbyStart,
  sleepBubble,
  workBubble,
  bobbySad,
  playBubble,
};

window.preload = preload;
