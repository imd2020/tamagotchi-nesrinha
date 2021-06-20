export default class Button {
  constructor(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    textSize(16);
    fill("black");
    text(`${this.text} `, 0, 0);
    pop();
  }

  hitTest() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y - this.height / 2 &&
      mouseY <= this.y - this.height / 2 + this.height
    ) {
      // fill("white");
      // this.state = "clicked";
      // this.point++;
      return true;
    } else {
      return false;
    }
  }
}

// -> ${this.state}
