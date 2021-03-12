var bullet ,wall ,thickness;

var speed ,weight;

function setup() {
  createCanvas(1600,400);
  
 speed=random(55,90);
 weight=random(400,1500);

 thickness =random(23,83);

 bullet = createSprite(50,200,50,10);
 bullet.velocityX = speed;
 bullet.shapeColor = "white";

 wall = createSprite(1200,200,thickness,height/2);


}

function draw() {
  background("black");  

  if(wall.x - bullet.x < (bullet.width + wall.width)/2){

   bullet.velocityX = 0 ;
   var deformation = 0.5 * weight * speed * speed/22509 ;

   if(deformation > 180){
     wall.shapeColor = "red";
   }
   if(deformation < 180 && deformation > 100){
    wall.shapeColor = "yellow";
  }

   if(deformation < 100){
    wall.shapeColor = "green";
   }

  }
  textSize(50)
text("Deformation :"+ deformation,70,90); 

  drawSprites();
}