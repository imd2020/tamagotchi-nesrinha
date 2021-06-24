export default class Button {
  constructor(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.s = 1;
  }

  display() {
    push();
    translate(this.x, this.y);
    if (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      this.s = 1.2;
    } else {
      this.s = 1;
    }
    scale(this.s);
    stroke(236, 212, 101);
    strokeWeight(4);
    rect(-15, -25, this.width, this.height, 10);
    noStroke();
    textSize(16);
    fill("black");
    textAlign(CENTER);
    text(`${this.text} `, this.width / 2 - 10, 0);
    pop();
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
