var circleY= 0;
var circleChange= 5;
var rectX= 0;
var rectChange= 7;
var r= ;
var g= ;
var b= ;

function setup(){

  createCanvas(displayWidth,displayHeight);
  background(0);
}

function draw(){

  background(r,g,b);
  fill(13,223,28);
  rectX += rectChange;
  if (rectX > displayWidth || rectX < 0){
    rectChange = circleChange * -1;
  }
  rect(rectX,circleY,300,100);

  fill(250,78,99);
  circleY += circleChange;
  if (circleY > displayHeight || circleY < 0){
    circleChange = circleChange * -1;
    }
  ellipse(450,circleY, 100)
}
