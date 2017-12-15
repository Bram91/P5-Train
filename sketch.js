//draw a spinning teapot
var train;

function setup(){
  createCanvas(800, 600, WEBGL);
  train = loadModel('train.obj');
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(train);
}