function setup() {
  createCanvas(300, 300);
  background(220);
  }

  function draw() {
    var sx = 50;
    var sy = 50;
    var w  = 200;
    var g  = 50;
  line(sx,sy,sx+w,sy);
  line(sx,sy+g*1,sx+w,sy+g);
  line(sx,sy+g*2,sx+w,sy+g+g);
  line(sx,sy+g*3,sx+w,sy+g+g+g)
  line(sx,sy+g*4,sx+w,sy+g+g+g+g);
  }
