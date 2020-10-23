var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
    
  speed=random(55,90);
  weight=random(1000,2500);

  car=createSprite(30,200,50,50);
  car.velocityX=speed;
  car.shapeColor=color(255);

  wall=createSprite(700,200,80,height/2);
  wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background(190);

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500; 

    if(deformation > 180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation < 180 && deformation > 80){
      car.shapeColor=color(230,230,0);
    }
    if(deformation < 80){
      car.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}
