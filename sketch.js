
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30);
  if (keyIsDown(UP_ARROW)) {
    background("red");
  }
  if (keyIsDown(LEFT_ARROW)) {
    background("yellow");
  }

  if (keyIsDown(DOWN_ARROW)) {
    background("blue");
  }
  if (keyIsDown(RIGHT_ARROW)) {
    background("green");
  }
}




