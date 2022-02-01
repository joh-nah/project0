function setup() {
  createCanvas(800, 600);
  
}


function draw() {
  background(0);
  triangle(0, 0, 500, 600, 800, 0);  //x1,y1, x2, y2, x3, y3

  push();
  fill(255, 0, 0);
  noStroke();
  ellipse(58, 50, 25);  //x, y, width, optional-height
  //circle(58, 50, 25);  //x, y, diameter
  pop();

}