var w;

function setup() {
  createCanvas(300,300);
  //background(200,230,220);//눈에좋은 그린!!

  w = new Walker();
  w2=  new Walker();

}

function draw() {
  background(200,230,220);//눈에좋은 그린!!


  w.setEnergy(map(mouseX, 0, width, 0, 10));
  w2.setEnergy(6);

  w.show(0, 0, 0);
  w.move();
  w2.show(250,250,250);
  w2.move();

}


//###Walker Object
function Walker() {
  this.x = width/2;
  this.y = height/2;
  this.e = 1  //e=에너지 움직이는 범위크기

  this.show = function(r, g, b){
    fill(r, g, b);
    ellipse(this.x,this.y,10);
    //w2.show(color(r,g,b))
    //this.show = function(color){
    //ellipse(this.x,this.y,10);
  }

 /*
 ?? 이클립스 컬러를 렌덤으로 바꾸려면??
 ???this.setColor = function(newColor) {
   this.penColor = newColor;
*/


  this.move = function(){
    var stepx = random(-1*this.e, this.e);
    var stepy = random(-1*this.e, this.e);
    this.x = this.x + stepx;   //앞 문장이랑같은 의미   this.x += stepx;
    this.y = this.y + stepy;


//    var this.x = int(random(3))-1; //0~2
  //  var this.y = int(random(3))-1;

    //this.x += this:
  }

  this.setEnergy = function(newE) {
    this.e = newE;

  }

}
