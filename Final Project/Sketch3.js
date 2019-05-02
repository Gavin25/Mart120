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
  textSize(20);
  text("Unfortunately, the dragon is stronger than you. Dying, you wonder what would have happened if you chose differently.",15,100);
  text("Try Again? Press Spacebar", 450,300);
  fill(255);
}

function endingScene2()
  {
    textSize(20);
    text("As you stand over the dead dragon, you look at the mountain of treasure, imagining what you are going to spend your new fortune on.", 15,100);
    text("Try for a new adventure? Press Spacebar", 450,300);
    fill(255);
  }

  function endingScene3()
  {
    textSize(20);
    text("You didn't know girraffes were carnivorous. Now you know this one is, as it seems to prefer your leg to trees.",15,100);
    text("Try again? Press Spacebar", 450,300);
    fill(255);
  }

  function endingScene4()
  {
    textSize(20);
    text("Your foot slips as you edge your way along the cliff. As you plummet, you watch the ground as it rises up to meet you.",15,100);
    text("Try again? Press Spacebar", 450,300);
    fill(255);
  }

  function endingScene5()
  {
    textSize(20);
    text("As you set up the date, you think about how unlikely this was that you and a dragon would hit it off so well.",15,100);
    text("Try for a new adventure? Press Spacebar", 450,300);
    fill(255);
  }

  function endingScene6()
  {
    textSize(20);
    text("You are hailed as the Lord of the Sparkle. Trying to give them your money was a suprisingly good idea.",15,100);
    text("Try for a new adventure? Press Spacebar", 450,300);
    fill(255);
  }

  function endingScene7()
  {
    textSize(20);
    text("You keep walking down a surprisingly boring path. You, walking into the sunset, begin to wonder if anything will anything.",15,100);
    text("Try for an actual ending? Press Spacebar.", 450,300);
    fill(255);
  }

  function endingScene8()
  {
    textSize(20);
    text("Walking into the town you find an old friend of yours, who recommends a classy bar, ending the night on a high note.",15,100);
    text("Try a new adventure? Press Spacebar", 450,300);
    fill(255);
  }

  function endingScene9()
  {
    textSize(20);
    text("Running back to the giraffe, you realize why it was alone. Blood all over its face it begins to move towards you hungry.",15,100);
    text("Try again? Press Spacebar", 450,300);
    fill(255);
  }

  function leftroad()
  {
    textSize(20);
    text("You turn and walk through a grey forest. Dinner plate sized spiders back and forth along the road. You see the trail continue",15,100);
    text("past a cliffside. As you work your way past, you see a cave. Do you investigate or continue on the trail?",15,150);
    text("Press 1 to continue. Press 2 to investigate the cave.", 450,300);
    fill(255);
  }

  function Cliffside()
  {
    textSize(20);
    text("Ignoring the cave, you inch your way on an ever shrinking pathway, you see a gap in the road, with a sharp fall below.",15,100);
    text("You see that you can either jump the 10ft gap or try to inch your along the very thin path. Which do you choose?",15,150);
    text("Press 1 to jump. Press 2 to inch your way around.", 450,300);
    fill(255);
  }

  function Jump()
  {
    textSize(20);
    text("With a solid 'thump', you land on your feet, having made it to the other side of the gap. Walking along the path, you",15,100);
    text("see a little, busseling town out in front of you. Do you continue on the path or go into the small town?",15,150);
    text("Press 1 to continue on the path. Press 2 to walk into the town.", 450,300);
    fill(255);
  }

  function Cave()
  {
    textSize(20);
    text("Turning off the path, you walk into this cave. Walking into it for a short while, you hear a snort and look to the side.",15,100);
    text("In a side cavern that you missed, a dragon stands up and stares at you. What do you want to do?",15,150);
    text("Press 1 to fight the dragon. Press 2 to try to charm the dragon.", 450,300);
    fill(255);
  }

  function dragonFight()
  {
    textSize(20);
    text("You pull out your weapon, ready for battle. The dragon rears its head back and roars. Will you fight recklessly or defensively?",15,100);
    text("Press 1 to fight with reckless abandonment. Press 2 to fight carefully.", 450,300);
    fill(255);
  }

  function rightroad()
  {
    textSize(20);
    text("Walking towards the green meadow, you notice two things off in the distance, a lone giraffe and a group of goblins.",15,100);
    text("You realize that will have to alert one of them to your presence. Who do you choose?",15,150);
    text("Press 1 for the goblins. Press 2 for the lone giraffe.", 450,300);
    fill(255);
  }

  function goblins()
  {
    textSize(20);
    text("Moving your way towards the goblins, they notice you and begin to demand you give them food. Unfortunately, you only have",15,100);
    text("some gold on you. Do you wish to attempt to give them some money to let you pass or run back to the giraffe?",15,150);
    text("Press 1 to hold up some gold. Press 2 to run to the giraffe.", 450,300);
    fill(255);
  }

  function keyPressed1()
  {
      if(key == "1")
      {
      clear();
      leftroad();
      }
      else if(key == "2")
      {
      endingScene2();
      }
  }
