import Button from "./button.js";

export default class Startscreen extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  display() {
    background(128);
    fill(236, 212, 101);
    textSize(50);
    strokeWeight(2);
    stroke(255);
    text("BOBBYGOTSCHI", 115, 75);
    textSize(15);
    fill(0);
    noStroke();
    text(
      "Hello and Welcome to Bobbygotschi! Finde durch Klicken der Optionen heraus, was Bobby braucht und machen muss, um sich zu einem guten Minion zu entwickeln. Viel Erfolg!",
      110,
      150,
      450,
      500
    );
    fill(255);
    let buttonStart = new Button(
      this.x,
      this.y,
      this.width,
      this.height,
      "LETS GO"
    );
    buttonStart.display();
  }
  hitTest() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y - this.height / 2 &&
      mouseY <= this.y - this.height / 2 + this.height
    ) {
      console.log("hitTestfunktioniert");
      return true;
    } else {
      console.log("hitTestfunktioniertnicht");
      return false;
    }
  }
}
