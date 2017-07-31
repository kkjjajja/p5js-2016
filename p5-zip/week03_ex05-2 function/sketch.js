function setup() {
createCanvas(300, 300);
background(220);
}

function draw() {
  AAA(mouseX,mouseY,10)
  AAA(mouseY,mouseX,5)
}

function AAA(sx,sy,w) {
  line(sx,sy,sx+w,sy);
  line(sx,sy,sx,sy+w);
  line(sx+w,sy,sx+w,sy+w);
  line(sx,sy+w,sx+w,sy+w);
}
