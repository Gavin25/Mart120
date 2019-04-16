var x = 100;
var y = 200;
//var changeScale = false;
var change = 9;

var secondX = 290;
var secondY = 335;
var secondChange = 4;

var randomNumber = 0;
var squareR= 0;
var squareG= 0;
var squareB= 0;
var circleR= 0;
var circleG= 0;
var circleB= 0;

function setup() {
  createCanvas(800,600)
  //background(0);
  randomNumber = Math.floor(random(0,256));
  squareR= random(0,255);
  squareG= random(0,255);
  squareB= random(0,255);
  circleR= random(0,255);
  circleG= random(0,255);
  circleB= random(0,255);
  backR= random(0,255);
  backG= random(0,255);
  backB= random(0,255);
  //print("random" + randomNumber);
}

function draw() {

    background(backR, backG, backB);

    textSize(24);
    fill(255);
    text("Wesley Yarnall created this. It's Ok, I guess.", 175, 550);

    x = x + change;
    if(x > 775 || x < 25){
      change= change * -1;
      randomNumber = Math.floor(random(0,256));
      changecircleNumber()
      backgroundcolor()
    }

    secondY = secondY + secondChange;
    if(secondY > 560 || secondY < 0){
      secondChange= secondChange * -1;
      randomNumber = Math.floor(random(0,256));
      changesquareNumber()
      backgroundcolor();
    }

    fill(circleR, circleG, circleB);
    ellipse(x, y, 50, 50)
    fill(squareR, squareG, squareB);
    square(secondX, secondY, 50, 50)
}

function changesquareNumber() {
  squareR= random(0,255);
  squareG= random(0,255);
  squareB= random(0,255);
}

function changecircleNumber(){
  circleR= random(0,255);
  circleG= random(0,255);
  circleB= random(0,255);
}

function backgroundcolor(){
  backR= random(0,255);
  backG= random(0,255);
  backB= random(0,255);
}
