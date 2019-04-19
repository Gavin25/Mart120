var r= 255;
var g= 255;
var b= 255;

function setup()
{
  createCanvas(displayWidth, displayHeight, WEBGL);
  background(0);
}

function draw()
{
  background(37,43,215);
  fill(random(r),random(g),random(b));
  createSphere(100,-500,0,"xDirection");
  createSphere(57,475,30,"yDirection");
  createSphere(30,240,120,"xDirection");
  push();
  translate(300,35);
  rotateY(millis()/1000);
  box(45);
  pop(0);
}

function createSphere(radius, translateX, translateY, rotateDirection)
{
  push();
  if(rotateDirection == "xDirection")
  {
  rotateX(millis()/1000);
  }
  else if(rotateDirection == "yDirection")
  {
  rotateY(millis()/1000);
  }
  translate(translateX,translateY);
  sphere(radius,24,24);
  pop();
  }
