var ball;

function setup() {
  createCanvas(300, 300);
  background(220);

  ball = new Walker();
}

function draw() {
  background(220);
  ball.move();
  ball.bounce();
  ball.show();
}


// ### Walker Object
function Walker() {
  this.x = width/2;
  this.y = height/2;
  this.vx = random(-3, 3);
  this.vy = random(-3, 3);
  this.d = 10;


  this.show = function() {
    ellipse(this.x, this.y, this.d);
  }


  this.move = function() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }


  this.bounce = function() {
    if (this.x < 0 || width < this.x) {
      this.vx = this.vx * -1;
    }
    if (this.y < 0 || height < this.y) {
      this.vy = this.vy * -1;
    }
  }

}
