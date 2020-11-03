var car,wall;

var speed,weight;

function setup() {
  createCanvas(1000,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocitiyX = speed;
  car.shapeColor = ("white");

  wall = createSprite(800,200,50,200);
  wall.shapeColor = color ("red")

  }

function draw() {
  background("black");  

  if(wall.x-car.x < (car.widt+wall.width)/2){
     car.velocitiyX = speed;
     var deformation = 0.5 * weight * speed * speed/22509;
    }

if(deformation>180);{
       car.shapeColor = ("green");
}

if(deformation<180 && deformation>100);{
  car.shapeColor = ("blue");
}

if(deformation<100);{
  car.shapeColor = ("orange");
}


  drawSprites();
}