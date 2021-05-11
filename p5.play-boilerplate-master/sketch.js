var rect1,rect2;

function setup() { 
  createCanvas(1200,800);
  rect1=createSprite(500, 200, 50, 30);
  rect2=createSprite(400,200,80,30);

  rect1.shapeColor="blue";
  rect2.shapeColor="purple";
}

function draw() {
  background(0);
  
  rect2.x=World.mouseX;
  rect2.y=World.mouseY;

if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 && rect2.x-rect1.x < rect1.width/2 + rect2.width/2
  && rect1.y-rect2.y<rect1.height/2+rect2.height/2 && rect2.y-rect1.y < rect1.height/2 + rect2.height/2){

rect1.shapeColor="pink";
  rect2.shapeColor="white";

  }

else{
  rect1.shapeColor="blue";
  rect2.shapeColor="purple";
}

  drawSprites();
}