class Bouncer {
  constructor(x, y, d, col, xvel, yvel) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.col = col;
    this.xVel = xvel;
    this.yVel = yvel;
    this.r = this.d / 2;
  }

  tick() {
    this.x += this.xVel;
    this.y += this.yVel;

    strokeWeight(2)
    if (this.col) {
      stroke('#e291e3')
      fill('#e291e3')
    } else {
      stroke('#47c9dc')
      fill('#47c9dc')
    }

    //blendMode(DIFFERENCE)

    //fill(12, 13, 13)

    if (this.x + this.r >= width + (this.d / 5) || this.x + this.r <= 0 + this.r) {
      this.xVel *= -1;
    } else if (this.y + this.r >= height + (this.d / 5) || this.y + this.r <= 0 + this.r) {
      this.yVel *= -1;
    }

    circle(this.x, this.y, this.d);
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