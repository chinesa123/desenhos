function setup() {
  createCanvas(400, 400);
  background("pink");
}

function draw() {
 if(mouseIsPressed) {
  stroke("red");
  fill("purple");
  rect(mouseX,mouseY,8,8)
  }
}
