var w;

function setup() {
  createCanvas(300,300);
  background(200,230,220);//눈에좋은 그린!!

  w = new Walker();
}

function draw() {
  w.show();
  w.move();
}


//###Walker Object
function Walker() {
  this.x = width/2;
  this.y = height/2;

  this.show = function(){
   ellipse(this.x,this.y,10);
 }

  this.move = function(){
    this.x= this.x + 1;
    this.y= this.y + 1;
  }

}
