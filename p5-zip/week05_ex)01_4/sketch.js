var w, w2;

function setup() {
  createCanvas(300,300);
  // background(200,230,220);//눈에좋은 그린!!

  w = new Walker();
  // w2= new Walker();

}

function draw() {
  background(200,230,220);//눈에좋은 그린!!
  w.show();
  w.move();
  w.diet(random(-5,5));

 // w2.show();
 // w2.move();

}


//###Walker Object
function Walker() {
  this.x = width/2;
  this.y = height/2;
  this.fat = 1;

  this.show = function() {

    ellipse(this.x, this.y, this.fat);
    //rect(this.x,this.y,10,10);
    fill(200,150,220);
 }

  this.move = function() {
    var dice = int(random(5)); //0~3

    if (dice == 0) this.x++;
    else if (dice == 3) this.x--;
    else if (dice == 2) this.y++;
    else this.y--;
  }

  this.diet = function(food) {
    this.fat = this.fat + food
  }
}
