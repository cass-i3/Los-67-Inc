const w = 30;
const h = 50;

const xoffset = 30;
const yoffset = 10;

let shapes = [];

class Thingimajig {
  constructor(x, y, index) {
    this.x = x % width;
    this.y = y % height;
    this.initX = x;
    this.initY = y;
    this.angle = x;
    this.x1 = x + w;
    this.y1 = y + h;
    this.x2 = x - w;
    this.y2 = y - h + 30;
    this.index = index;
    this.col = this.getColor();
  }

  findNewValues() {
    this.x1 = this.x + w;
    this.y1 = this.y + h;
    this.x2 = this.x - w;
    this.y2 = (this.y - h + (h * 4) / 3) % height;
  }

  getColor() {
    if (this.index % 2 == 0) {
      return "#e291e3";
    } else {
      return "#47c9dc";
    }
  }

  tick() {
    push();
    this.findNewValues();
    strokeWeight(6);
    stroke(this.col);
    fill(this.col);
    translate(this.x, this.y);
    rotate(this.angle);
    translate(0, 0);
    triangle(this.x, this.y, this.x1, this.y1, this.x2, this.y2);
    this.x = this.x > width + w ? 0 - w : this.x + 0.25;
    this.angle += 1;
    pop();
  }
}

function setup() {
  const canvas = createCanvas(windowWidth, 400);
  console.log("dih");
  let index = 0;
  canvas.parent("canvas-container");

  const maxCols = floor(width / (w + xoffset));
  const maxRows = floor(height / (h + yoffset));

  background("#0d0c0c");

  angleMode(DEGREES);

  for (let i = 0; i < maxCols; i++) {
    for (let j = 0; j < maxRows; j++) {
      const x = i * (w + xoffset);
      const y = j * (h + yoffset);
      shapes.push(new Thingimajig(x, y, index++));
    }
  }

}

function draw() {
  background(12, 13, 13, 30);

  shapes.forEach((s) => {
    s.tick();
  });
}

window.addEventListener("resize", () => {
  resizeCanvas(windowWidth, 400);
  shapes = [];
  setup();
});
