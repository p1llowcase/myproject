var onee;
var bg;
var star2;

function preload(){
  onee = loadImage("star.png");
  bgg = loadImage("skyyyy.png");
  star2 = loadImage("download.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(165, 485, 50, 50);
  bg.addImage(bgg);
  bg.scale = 3;


  one = createSprite(400, 200, 50, 50);
  one.addImage(onee);
  one.scale = 1;
  
  starr = createSprite(100,100,50,50);
  starr.addImage(star2);
  starr.scale = 0.5;
}

function draw() {
  background(255,255,255);  
  
 if(keyDown("up_arrow")) {
   one.velocityY = -6 ;
 }

 if(keyDown("down_arrow")) {
   one.velocityY = +6 ;
 }

 if(keyDown("left_arrow")) {
   one.velocityX = -6 ; 
 }

 if(keyDown("right_arrow")) {
   one.velocityX = +6 ;
 }




  drawSprites();
}
