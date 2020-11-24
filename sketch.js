var rec
var rec2, rec3, rec4



function setup() {
  createCanvas(800,400);
  rec = createSprite(600,200,50,50)
  rec2 = createSprite(700,300,50,50)
  rec3 = createSprite(300,150,50,50)
  rec4 = createSprite(200,200,50,50)
  rec.velocityX = -3
  rec4.velocityX = 3

}
function draw() {
  background(255,255,255);  
  rec.shapeColor = "red"
  rec2.shapeColor = "blue"
  rec3.shapeColor = "green"
  rec4.shapeColor = "yellow"
  change(rec,rec3)
  bounceOff(rec, rec4)
  drawSprites();

}

