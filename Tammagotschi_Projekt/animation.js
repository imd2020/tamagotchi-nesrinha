import gsap from "./gsap.min.js";
let bobbyStart = loadImage("./bobbyStart.png");

const bobbyPos = {
  y: 500,
  scale: 0.1,
};
function draw() {
  clear();
  image(
    bobbyStart,
    275,
    bobbyPos.y,
    13.55 * 20 * bobbyPos.scale,
    18.25 * 20 * bobbyPos.scale
  );
  //   fill("pink");
  //   circle(bobbyStart.x, bobbyStart.y, 50);
  //   fill(0);
  //   circle(bobbyStart.x - 10, bobbyStart.y - 5, 5);
  //   circle(bobbyStart.x + 10, bobbyStart.y - 5, 5);
  //
}
gsap.to(bobbyPos, {
  duration: 5,
  ease: "power1.out",
  repeat: 2,
  y: 200,
  scale: 0.5,
  onComplete: () => {
    console.log("LetsStart");
    // textSize(10);
    // fill(255);
    // text("yeeey", 300, 300);
  },
});
