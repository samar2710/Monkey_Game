
var monkey , monkey_running;
var bananaImage, obstacleImage;
var ground;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
  monkey=createSprite(50,370,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  score=0;
  
  
}


function draw() {
  background("white");
  
  ground=createSprite(200,375,450,5);
  ground.velocityX=-5;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  monkey.collide(ground);
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  //console.log(monkey.y);
  if(keyDown("space") && monkey.y>341.7){
    monkey.velocityY=-10;
    
  }
  if(monkey.isTouching(obstacleGroup)){
    monkey.velocityY=0;
    monkey.velocityX=0;
    ground.velocityX=0;
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
  }
  text("Score: "+score,300,30);
  score=score+Math.round(getFrameRate()/60);
  
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,300,50);
  monkey.velocityY=monkey.velocityY+0.5;
  
  drawSprites();
  
}
function obstacles(){
  if(frameCount%10==0){
   var obstacle;
    obstacle=createSprite(300,200,10,10);
    obstacle.velocityX=-6;
    obstacle.addImage("rock",obstaceImage);
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
  }
}
function bananas(){
  if(frameCount%60==0){
  var banana;
  banana=createSprite(300,rand(150,200),10,10);
  banana.velocityX=-6;
  banana.addImage("fryit",bananaImage);
    banana.lifetime=200;
    bananaGroup.add(banana);
}
}




