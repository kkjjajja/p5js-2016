var ball;

function setup() {
  createCanvas(300, 300);
  background(250);
  ball = new Ball();
  background(random(90,200),random(90,205), 255);
}

function draw() {

  ball.move();
  ball.bounce();
  ball.show();
}


function Ball() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.d = 250;


  this.show = function() {
   noStroke()
   ellipse(this.pos.x, this.pos.y, this.d);


  }



  this.move = function() {
    this.pos.add(this.vel);
  }



  this.bounce = function() {
    if (this.pos.x < 125) {
      this.vel.x = this.vel.x * -1;
        fill(random(150,255),random(200,255), 205);
    }
    if (this.pos.y < 125) {
      this.vel.y = this.vel.y * -1;
        fill(random(150,205),random(200,230), 255);
    }
     if (this.pos.x > 175) {
      this.vel.x = this.vel.x * -1;
        fill(random(170,245),random(180,235), 240);
    }
    if (this.pos.y > 175 ) {
      this.vel.y = this.vel.y * -1;
        fill(random(220,255),random(190,255), 255);
      ;
    }
  }
}
