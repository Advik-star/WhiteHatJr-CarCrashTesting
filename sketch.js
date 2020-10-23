var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor=(255);

  wall=createSprite(1500,200,60,hieght/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 *width *speed *speed/22509; 

    if(deformation>180){
      car.shapeColor=(255,0,0);
    }
    if(deformation<180 && deformation>80){
      car.shapeColor=(230,230,0);
    }
    if(deformation<80){
      car.shapeColor=(0,255,0);
    }
  }
  
  drawSprites();
}