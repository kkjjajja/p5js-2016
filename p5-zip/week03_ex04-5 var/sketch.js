//애니메이션

function setup() {
createCanvas(300, 300);
}

function draw() {
  background(220);
  var sx = mouseX;
  var sy = mouseY;
  var w  = 100;
line(sx,sy,sx+w,sy);
line(sx,sy,sx,sy+w);
line(sx+w,sy,sx+w,sy+w);
line(sx,sy+w,sx+w,sy+w);
}
