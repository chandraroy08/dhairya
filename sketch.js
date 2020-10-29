var car,wall;
var speed,weight; 

function setup() {
  createCanvas(1000,400);

  car = createSprite(0,200,90,50);

  wall = createSprite(1000,200,60,400);
  wall.shapeColor = (80,80,80);

  speed = random(55,90);
  weight = random(400,1500);
  
}

function draw() {
  background("purple"); 

  car.velocityX = speed;
  
  if(wall.x - car.x < wall.width / 2 + car.width / 2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500;
    if(deformation > 180){
      car.shapeColor = "red";
    }  
    if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }
    if(deformation < 100){
      car.shapeColor = "green";
    }
  
  }


  drawSprites();
}