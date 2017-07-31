var w;

function setup() {
  createCanvas(300,300);
  //background(200,230,220);//눈에좋은 그린!!

  w = new Walker();
}

function draw() {
  background(200,230,220);//눈에좋은 그린!!
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

 /*
 ?? 이클립스 컬러를 렌덤으로 바꾸려면??
 ???this.setColor = function(newColor) {
   this.penColor = newColor;
*/


  this.move = function(){
    var dice = int(random(4)); //0~3

    if (dice == 0) this.x++;
    else if (dice == 1) this.x--;
    else if (dice == 2) this.y++;
    else this.y--;
  }

}
