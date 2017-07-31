var walkers = [];
var number = 1000;


function setup() {
  createCanvas(300, 300);
  background(220);

  for (var i=0; i<number; i++) {
    walkers[i] = new Walker();
  }
}


function draw() {
  for (var i=0; i<number; i++) {
    walkers[i].move();
    walkers[i].show();
    walkers[i].e = map(mouseX, 0, width, 0, 10);
  }
}


// ### Walker Object
function Walker() {
  this.x = width/2;
  this.y = height/2;
  this.d = 1;
  this.c = color(random(0, 100));
  this.e = 1; //energy

  this.show = function() {
    fill(this.c);
    stroke(this.c);
    ellipse(this.x, this.y, this.d);
  }

  this.move = function() {
    this.x = this.x + random(-1*this.e, this.e);
    this.y = this.y + random(-1*this.e, this.e);
  }
}
