var fixedrect,movingrect;
function setup() {
  createCanvas(1200,800);
fixedrect=createSprite(400,100,50,80);
movingrect=createSprite(400,800,80,30);
fixedrect.shapeColor="green";
 movingrect.shapeColor="green";
 fixedrect.velocityY=5;
 movingrect.velocityY=-5;
}

function draw() {
  background("black");  

  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    )
  {
    movingrect.velocityX=movingrect.velocityX*(-1);
    fixedrect.velocityX=fixedrect.velocityX*(-1);
  }
  if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
    ){
      movingrect.velocityY=movingrect.velocityY*(-1);
      fixedrect.velocityY=fixedrect.velocityY*(-1);
    }

    fill("white");
    textSize(35);
    text("algorithm",200,300);
  drawSprites();


}