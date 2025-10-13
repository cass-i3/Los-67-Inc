let mcGees = [];
let mcGeeAmt = 5;
let diameter, vel;
let bossImg;

function preload() {
  bossImg = loadImage('./scripts/p5-classes/McGee.png');
}

function setup() {
  const canvas = createCanvas(windowWidth, 400);
  canvas.parent('canvas-container');

  diameter = width / 10;

  background('#0d0c0c')

  for (let i = 0; i < mcGeeAmt; i++) {
    vel = Math.floor(Math.random() * width) / 100;
    mcGees.push(new Boss(Math.floor(Math.random() * (width - diameter / 2)) + diameter / 4, Math.pow(i,2), diameter, (i % 2 == 0), (Math.random() > .2) ? vel : -vel, (Math.random() > .7) ? vel : -vel), bossImg, windowWidth, windowHeight)
  }
}

function draw() {
  background(12, 13, 13)

  for (let i = 0; i < mcGees.length; i++) {
    mcGees[i].tick();
  }
}

window.addEventListener("resize", () => {
  resizeCanvas(windowWidth, 400);
  mcGees = [];
  setup();
});