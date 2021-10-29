var scene,sceneimg;
var sword,swordimg;
var bad,badimg;
var ang,angimg;
var score=0;
var badp,devs,angs;
var swoosh;
var lost;
var boo;
var game,gameover;
var gamestate=1;
var PLAY=1;
var END=0;

function preload(){
sceneimg = loadImage("scene.jpg");
swordimg = loadImage("sword.png");
badimg = loadImage("bad1.png");
devimg = loadImage("devil.png");
angimg = loadImage("angel.png");
lost = loadSound("gameover.wav");
swoosh = loadSound("swoosh.wav");
boo = loadSound("boo.wav");
gameover = loadImage("Gameover.png")
}

function setup(){
createCanvas(800,400);
scene = createSprite(0,-130);
scene.addImage(sceneimg);
scene.velocityX=-3;

sword = createSprite(400,200);
sword.addImage(swordimg);
sword.scale=0.1;

badp=new Group();
devs=new Group();
angs=new Group();
}

function draw(){
  //background("grey");
  if(gamestate==PLAY){
  if (scene.x<0){
    scene.x=scene.width/2;
  }

  sword.x=World.mouseX;
  sword.y=World.mouseY;

  if(sword.isTouching(badp)){
    score+=50;
    swoosh.play();
    badp.destroyEach();
    }
  
  if(sword.isTouching(devs)){
   score+=10;
   swoosh.play();
   devs.destroyEach();
  }
  if(sword.isTouching(angs)){
    score-=100;
    boo.play();
    angs.destroyEach();
    if(score<=0)
    gamestate=END;
    }
}
else
{
    //lost.play();
    scene.velocityX=0;
    sword.x=400;
    sword.y=200;
    badp.destroyEach();
    devs.destroyEach();
    angs.destroyEach();
    game = createSprite(400,100);
    game.addImage(gameover);
}
  drawSprites();
  badPerson();
  devil();
  anw();
  textSize(15);
  fill("white");
  text("Score: "+score,10,20);
}

function badPerson(){
  if(World.frameCount%170===0){
    bad=createSprite(700,60,20,20);
    bad.y = Math.round(random(60,300));
    bad.addImage(badimg);
    bad.scale=0.06;
    bad.velocityX=-3;
    badp.add(bad);
  }
}

function devil(){
  if(World.frameCount%60===0){
    dev=createSprite(700,60,20,20);
    dev.y = Math.round(random(60,300));
    dev.addImage(devimg);
    dev.scale=0.02;
    dev.velocityX=-3;
    devs.add(dev);
  }
}

function anw(){
  if(World.frameCount%280===0){
    ang=createSprite(700,60,20,20);
    ang.y = Math.round(random(60,300));
    ang.addImage(angimg);
    ang.scale=0.1;
    ang.velocityX=-3;
    angs.add(ang);
  }
}

