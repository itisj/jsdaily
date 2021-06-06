
// Flocking
// Daniel Shiffman
// https://thecodingtrain.com

// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM
// https://editor.p5js.org/codingtrain/sketches/ry4XZ8OkN

const flock = [];



function setup() {
  createCanvas(600, 600);
  let align = 0.1;
  let cohesion = 0.1;
  let separation = 0.1;
  for (let i = 0; i < 200; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(51);
  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
}