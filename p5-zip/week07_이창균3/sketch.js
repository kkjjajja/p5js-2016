var ball ;
var balls = [];

function setup() {
  createCanvas(300, 300);
  background(220);


}

function draw() {

  for (var i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].bounce();
    balls[i].show();
  }
}

function mouseClicked() {
  var ball = new Ball();
  ball.setPosition(mouseX, mouseY);
  balls.push(ball);
}


function Ball() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.d = 10;


  this.show = function() {
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.d);

  }


  this.move = function() {
    this.pos.add(this.vel);
  }

background(this.pos.x, this.d, this.pos.y);

this.bounce = function() {
  if (this.pos.x < 5) {
    this.vel.x = this.vel.x * -1;
      fill(255,random(255),random(255));

  }
  if (this.pos.y < 5) {
    this.vel.y = this.vel.y * -1;
      fill(random(255),random(255),255);
  }
   if (this.pos.x > 295) {
    this.vel.x = this.vel.x * -1;
    fill(random(255),255,random(255));
  }
  if (this.pos.y > 295 ) {
    this.vel.y = this.vel.y * -1;
    fill(255);
    }
  }

  this.setPosition = function(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

}


/*
나는 D가 랜덤이아니라서 이렇게 했는뎅...

this.bounce = function() {
  if (this.pos.x < 110) {
    this.vel.x = this.vel.x * -1;
    fill(this.pos.x, this.pos.y, this.d);
  }
  if (this.pos.y < 10) {
    this.vel.y = this.vel.y * -1;
    fill(this.pos.x, this.pos.y, this.d);
  }
   if (this.pos.x > 290) {
    this.vel.x = this.vel.x * -1;
    fill(this.pos.x, this.pos.y, this.d);
  }
  if (this.pos.y > 290 ) {
    this.vel.y = this.vel.y * -1;
    fill(this.pos.x, this.pos.y, this.d);
    ;
  }
}
*/
