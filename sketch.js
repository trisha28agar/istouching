var movingRect,fixedRect


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200,200,50,50)
fixedRect=createSprite(100,300,100,100)
movingRect.debug=true
fixedRect.debug=true
movingRect.shapeColor="green"
fixedRect.shapeColor="green"



}

function draw() {
  background(255,255,255);  
  movingRect.y=mouseY
  movingRect.x=mouseX

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2&&
   movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
   fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2 ){
movingRect.shapeColor="red"
fixedRect.shapeColor="red"
  }else {
movingRect.shapeColor="green"
fixedRect.shapeColor="green"
  }
  drawSprites();
}