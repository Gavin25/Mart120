var r= 255;
var g= 255;
var b= 255;

function setup()
{
  createCanvas(1350,600);
  background(random(r),random(g),random(b));
}

function draw()
{
  start();
  keyPressed();
  keyPressed1();
}

function start()
{
  textSize(45);
  text("Wesley's Choose Your Own Adventure!", 325,100);
  textSize(24);
  text("Before you there are two roads; one going to the left and one to the right. The one to the left is a dark road covered in dead",20,200);
  text("brush and low light in the shadow of trees. The right path passes through a green meadow, a few hundred yards out.",20, 250);
  text("Which road will you choose? Left? Or Right?", 450,300);
  text("Press the 1 for left and 2 for right.", 450,350);
  fill(255);
}


function endingScene1()
{
  textSize(24);
  text("Unfortunately, your best wasn't enough. As you lay there dying, you wonder what would have happened if you chose differently.",15,100);
  text("Try Again? Press Spacebar", 450,300);
  fill(255);

}

function endingScene2()
  {
    textSize(24);
    text("As you stand over your pile of treasure, you begin to imagine what you are going to spend your new fortune on.", 15,100);
    text("Try again? Press Spacebar", 450,300);
    fill(255);
  }

  function endingScene3()
  {
    textSize(24);
    text("You didn't know girraffes were carnivorous. Now you know this one is, as it seems to prefer your leg to trees.",15,100);
    text("Try again? Press Spacebar", 450,300);
    fill(255);
  }

  function endingScene4()
  {
    textSize(24);
    text("Your foot slips as you edge your way along the cliff. As you plummet, you watch the ground as it rises up to meet you.",15,100);
    text("Try again? Press Spacebar", 450,300);
    fill(255);
  }

  function endingScene5()
  {
    textSize(24);
    text("As you set up the date, you think about how unlikely this was that you and a dragon would hit it off so well.",15,100);
    text("Try again? Press Spacebar", 450,300);
    fill(255);
  }

  function endingScene6()
  {
    textSize(24);
    text("You are hailed as the Lord of the Sparkle. Trying to give them your money was a suprisingly good idea.",15,100);
    text("Try again? Press Spacebar", 450,300);
    fill(255);
  }

  function leftroad()
  {
    textSize(24);
    text("You turn and walk through a grey forest. Dinner plate sized spiders back and forth along the road. You see the trail continue",15,100);
    text("past a cliffside. As you work your way past, you see a cave. Do you investigate or continue on the trail?",)
    text("Press 1 to continue. Press 2 to investigate the cave.", 450,300);
    fill(255);
  }

  function keyPressed1()
  {
      if(key == "1")
      {
      leftroad();
      }
      else if(key == "2")
      {
      endingScene2();
      }
  }
