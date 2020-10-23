var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
    
  speed=random(55,150);
  weight=random(1000,3000);

  car=createSprite(30,200,50,50);
  car.velocityX=speed;
  car.shapeColor=(255,0,0);

  wall=createSprite(700,200,80,height/2);
  wall.shapeColor=(0,0,255);
  
}

function draw() {
  background(100);

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500; 

    if(deformation > 180){
      car.shapeColor=(255,0,0);
    }
    if(deformation < 180 && deformation > 80){
      car.shapeColor=(230,230,0);
    }
    if(deformation < 80){
      car.shapeColor=(0,255,0);
    }
  }
  
  drawSprites();
}
