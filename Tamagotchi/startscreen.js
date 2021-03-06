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
    text("BOBBYGOTCHI", 140, 75);
    textSize(15);
    fill(0);
    noStroke();
    //Tutorial/Infos
    fill(236, 212, 101);
    text(
      "Bello to Bobbygotchi! Finde durch Klicken der Optionen heraus, was Bobby braucht und machen muss, um sich zu einem guten Minion zu entwickeln. Viel Erfolg!",
      110,
      120,
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
      return true;
    } else {
      return false;
    }
  }
}
