var turtle;
var step;

function setup() {
  createCanvas(500, 500);
  background(220);

  turtle = new Turtle();
  step = 0;
}

function draw() {
  turtle.setColor(color(random(150,250),random(100,250),random(100,250)));
  turtle.go(random(0.01, 50));
  turtle.goto(mouseX, mouseY)
  turtle.turn(random(-100,200));
  //step = step +0.01;
}


// ################################  Turtle Object code (javascript에서는 오브젝트를 function이라고해)

function Turtle() {
  this.x = width/2;
  this.y = height/2;
  this.head = 0;
  this.isPenDown = true;
  this.penColor = color(200, 100, 100);

  this.goto = function(nx, ny) {
      this.x = nx;
      this.y = ny;
  }

  this.go = function(d) {
    var radian = radians(this.head);
    var oX = this.x;
    var oY = this.y;
    var nX = this.x + d * Math.cos(radian);
    var nY = this.y + d * Math.sin(radian);
    if (this.isPenDown) {
      stroke(this.penColor);
      strokeWeight(random(1,5));
      line(oX, oY, nX, nY);
    }
    this.x = nX;
    this.y = nY;
  }

  this.turn = function(angle) {
    this.head = this.head + angle;
  }

  this.setColor = function(newColor) {
    this.penColor = newColor;
  }

}

//거북이가 할 수 있는 행위: go goto setColor
