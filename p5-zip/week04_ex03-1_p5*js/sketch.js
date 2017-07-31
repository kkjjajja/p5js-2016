function setup()
{
  createCanvas(300, 300);
  /*background(220);

  drawOneLine(30);
  drawRandomLine(120);
  drawNoiseLine(220);
  */
}

function draw() {
  background(220);

  drawOneLine(30);
  drawRandomLine(120);
  drawNoiseLine(220);
}


// ######################## lines
function drawOneLine(y) {
  line(0, y, width, y);
}

function drawRandomLine(y) {
  var base = prev_y = y;
  for (var i = 0; i < width; i++) {
    y = base + random(-30, 30);
    line(i, prev_y, i+1, y);
    prev_y = y;
  }
}

function drawNoiseLine(y) {
  var base = prev_y = y;
  var t = 100;
  for (var i = 0; i < width; i++) {
    y = base/2 * noise(t) + base/4*3;
    line(i, prev_y, i+1, y);
    prev_y = y;
    t = t + 0.1;
  }
}
