function setup() {
createCanvas(300, 300);
background(220);
}

function draw() {
  var sx = 50;
  var sy = 50;
  var w  = 200;
line(sx,sy,sx+w,sy);
line(sx,sy,sx,sy+w);
line(sx+w,sy,sx+w,sy+w);
line(sx,sy+w,sx+w,sy+w);
}
