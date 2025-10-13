class Boss {
  constructor(x, y, d, col, xvel, yvel, img, widthIn, heightIn) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.col = col;
    this.xVel = xvel;
    this.yVel = yvel;
    this.r = this.d / 2;
    this.img = img;
    this.width = widthIn;
    this.height = heightIn;
  }

  tick() {
    this.x += this.xVel;
    this.y += this.yVel;

    //blendMode(DIFFERENCE)

    //fill(12, 13, 13)

    if (this.x + this.r >= this.width - this.r || this.x + this.r <= 0 + this.r) {
      this.xVel *= -1;
    } else if (this.y + this.r >= this.height - this.r || this.y + this.r <= 0 + this.r) {
      this.yVel *= -1;
    }
    tint(255);
    image(this.img, this.x, this.y, this.d, this.d);
  }

  collide(e) {
    if (this != e) {
      let dx = this.x - e.x;
      let dy = this.y - e.y;
      let dSq = dx * dx + dy * dy;
      let dMin = this.r + e.r;
      if (dSq < dMin * dMin) {
        this.xVel *= -1;
        this.yVel *= -1;
      }
    }
  }
}