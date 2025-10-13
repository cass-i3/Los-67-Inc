let balls = [];
let ballsAmt = 100;
let diameter, vel;

function setup() {
  const canvas = createCanvas(windowWidth, 400);
  canvas.parent('canvas-container');

  diameter = width / 40;
  vel = width / height % 10;

  background('#0d0c0c')

  for (let i = 0; i < ballsAmt; i++) {
    balls.push(new Bouncer((Math.random() * (width - 10)) + 5, (Math.random() * (height - 10)) + 5, diameter, (i % 2 == 0), (Math.random() > .5) ? vel : -vel, vel))
  }
}

function draw() {
  background(12, 13, 13, 30)

  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      balls[i].collide(balls[j]);
    }
    balls[i].tick();
  }
}

window.addEventListener("resize", () => {
  resizeCanvas(windowWidth, 400);
  balls = [];
  setup();
});