var movingR, fixedR, rect1, rect2, r1, r2;

function setup() {
  createCanvas(800,400);
  fixedR = createSprite(400, 200, 50, 50);
  fixedR.shapeColor = "red";
  movingR = createSprite(600, 300, 70, 70);
  movingR.shapeColor = "blue";
  rect1 = createSprite(700, 100, 30, 30);
  rect1.shapeColor = "lightblue";
  rect1.velocityX = -3;
  rect2 = createSprite(100, 100, 60, 60);
  rect2.shapeColor = "grey";
  rect2.velocityX = 3;
  r1 = createSprite(700, 300, 20, 20);
  r1.shapeColor = "orange";
  r1.velocityY = -3;
  r2 = createSprite(700, 100, 30, 30);
  r2.shapeColor = "orange";
  r2.velocityY = 3;
}

function draw() {
  background(0,200,120);  

  movingR.x = mouseX;
  movingR.y = mouseY;

  bounceOff(rect1, rect2);
  bounceOff(r1, r2);

  if (isTouching(movingR, fixedR)){

    movingR.shapeColor = "green";
    fixedR.shapeColor = "yellow";

  }
  else {
    movingR.shapeColor = "red";
    fixedR.shapeColor = "blue";
  }

  drawSprites();
}