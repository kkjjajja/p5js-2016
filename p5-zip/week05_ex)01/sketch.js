var w;

function setup() {
  createCanvas(300,300);
  background(200,230,220);//눈에좋은 그린!!

  w = new Walker();
}

function draw() {
  w.show();
  //W야 얼굴을 보여줘!!_함수를지정해야해 쑈에대한

}


//###Walker Object
function Walker() {
  this.x = width/2;
  this.y = height/2;

  this.show=function(){
   ellipse(width/2, height/2, 10);
 }




  //아무것도 하지않는 펑션을 만들어서 디스라고 지정해주면 오류가안나요=쑈에대한 함수지정 아무것도안하는 함수지만 오류가안나요
  //디스는 워커의 쇼다 라는 지시어야 자바에서는 셀프라는 지시어를쓰지
}
