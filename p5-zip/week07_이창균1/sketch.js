var ball;

function setup() {
  createCanvas(300, 300);
  background(220);

  ball = new Ball();
}

function draw() {
  background(220);
  ball.move();
  ball.bounce();
  ball.show();
}


function Ball() {
  this.pos = createVector(100, 200);
  this.vel = createVector(random(-1, 1), random(-5, 5));
  this.d = 60;


  this.show = function() {

    ellipse(this.pos.x, this.pos.y, this.d);
    fill(this.pos.x, this.pos.y, this.d);
  }


  this.move = function() {
    this.pos.add(this.vel);
  }


  this.bounce = function() {
    if (this.pos.x < 30 || width < this.pos.x) {
      this.vel.x = this.vel.x * -1;
    }
    if (this.pos.y < 30 || height < this.pos.y) {
      this.vel.y = this.vel.y * -1;
    }
     if (this.pos.x > 270 || width < this.pos.x) {
      this.vel.x = this.vel.x * -1;
    }
    if (this.pos.y > 270 || height < this.pos.y) {
      this.vel.y = this.vel.y * -1;
    }
  }

}
