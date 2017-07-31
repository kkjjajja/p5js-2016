var osc;
var t;
var circleX, circleY;

function setup() {
  createCanvas(300, 300);
  background(220);

  osc = new p5.Oscillator();
  osc.setType('Sine');
  osc.amp(0.5);
  osc.freq(1);
  osc.start();

  circleX = 0;
  t = 100;
}

function draw() {
  var randomY = random(height);

  var noiseY = map(noise(t), 0, 1, 0, height);
  t = t + 0.01;


  circleX += 0.5;
  circleY = noiseY; // choose randomY or noiseY;

  ellipse(circleX, circleY, 2);

  var freq = map(circleY, 0, height, 1000, 30);
  osc.freq(freq);
}
