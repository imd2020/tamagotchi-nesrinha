import Button from "./button.js";

export default class Startscreen extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  display() {
    background(128);
    fill(255);
    textSize(50);
    text("BOBBYGOTSCHI", 130, 175);

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
