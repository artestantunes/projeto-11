var sea;
var barco;
var ship_moving;

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  oceanoImg = loadAnimation("sea.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addAnimation("oceano",oceanoImg);
  sea.scale = 0.3;
  sea.velocityX = -2;
  barco = createSprite(200,200);
  barco.addAnimation("titanic 2.0",ship_moving);
  barco.scale = 0.3;

}

function draw() {
  background("blue");
  if(sea.x < 0){
  sea.x = sea.width/8;
  }
  drawSprites();
}
