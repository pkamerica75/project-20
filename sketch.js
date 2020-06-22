
var car ,wall ;
var weight , speed ; 


function setup() {
  createCanvas(1250,400);

  speed = random(55,90);
  weight= random(400,1500);
  
  wall = createSprite(1200, 200, 50, 200);
  car = createSprite(50, 200, 50, 50);
  wall.shapeColor = (80 , 80, 80);
  
  
}

function draw() {
  background(255,255,255);  //canvas background color
  drawSprites();
 
  car.display();
  wall.display();
  
  car.velocityX = speed; //start the car

  //check if car is going to colide with wall
  if(wall.x - car.x < (car.width + wall.width)/2)
  {
    onCollision();    
  } 

}

function onCollision(){

  car.velocityX = 0;
  var deformation = (0.5 * weight * speed *speed)/22500;
  
  //alert("deformation value: " + deformation);
  
  if(deformation < 100)
  {
      car.shapeColor = color(0 , 255 , 0 );     
  }

  if(deformation > 100 && deformation < 180)
  {
      car.shapeColor = color(230, 230 , 0);
  }

  if(deformation > 180)
  {
      car.shapeColor = color(255 , 0 , 0);
  }

}

   
