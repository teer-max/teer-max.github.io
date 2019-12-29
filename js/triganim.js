const MAX_WIDTH = 700;
const MAX_HEIGHT = 600;
var j = 0;
let cos = [];
let sin = [];
var circ = {
  x: MAX_WIDTH / 3,
  y: 3 * MAX_HEIGHT / 5,
}

function setup() {
  createCanvas(MAX_WIDTH, MAX_HEIGHT);
  frameRate(60);

  rslider = createSlider(20, 400, 120);
  tslider = createSlider(0, 25, 2);
  rslider.position(MAX_WIDTH * 0.75, MAX_HEIGHT * 0.1);
  tslider.position(MAX_WIDTH * 0.75, MAX_HEIGHT * 0.2);
  rslider.style('width', '150px');
  tslider.style('width', '150px');
}

function draw() {
  var r = rslider.value();
  var speed = tslider.value();
  //background and circle
  background(100, 100, 250);
  fill(255, 200, 240);
  stroke(0);
  strokeWeight(5);
  circle(circ.x, circ.y, 2 * r);

  // set up sin and cosine values (points on the circle):
  let x = circ.x + r * Math.cos(j);
  let y = circ.y + r * Math.sin(j);
  cos.unshift(x);
  sin.unshift(y);

  fill(20, 100, 250);
  //draw the points on the circle and the radius:
  ellipse(x, y, 5, 5);
  stroke(0, 0, 255);
  line(circ.x, circ.y, x, y);


  //draw axis for cosine wave:
  stroke(0);
  line(circ.x - r, circ.y - 1.5 * r,
    circ.x + r, circ.y - 1.5 * r);
  line(x, y, x, circ.y - 1.5 * r);
  //draw point on axis for cosine wave
  fill(255, 0, 0);
  stroke(255, 0, 0);
  ellipse(x, circ.y - 1.5 * r, 8, 8);
  //draw line from point on circle to point on axis


  // Now, draw wave form moving along axis:
  noFill();
  beginShape();
  for (i = 0; i < cos.length; i++) {
    vertex(cos[i], (circ.y - r * 1.5) - i);
  }
  endShape();


  //same thing over again for sine wave:
  stroke(0);
  line(circ.x + 1.5 * r, circ.y - r,
    circ.x + 1.5 * r, circ.y + r);
  line(x, y, circ.x + 1.5 * r, y);

  fill(0, 255, 0);
  stroke(0, 255, 0);
  ellipse(circ.x + 1.5 * r, y, 8, 8);

  noFill();
  beginShape();
  for (i = 0; i < sin.length; i++) {
    vertex((circ.x + r * 1.5) + i, sin[i]);
  }
  endShape();
  stroke(255, 0, 0);
  line(circ.x, circ.y, x, circ.y);
  stroke(0, 255, 0);
  line(x, y, x, circ.y);

  j -= tslider.value() / 100;
}
// function mouseClicked(){
//   save("triganim.jpg")
// }
