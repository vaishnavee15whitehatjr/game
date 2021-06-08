var bgImg,cat,mouse,catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3;
function preload() {
    //load the images here 
   bgImg=loadImage("garden.png"); 
   catImg1=loadImage("cat1.png");
   catImg2=loadImage("cat2.png","cat3.png"); 
   catImg3=loadImage("cat4.png");
   mouseImg1=loadImage("mouse1.png");
   mouseImg2=loadImage("cat2.png","cat3.png"); 
   mouseImg3=loadImage("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat=createSprite(870,600); 
   cat.addAnimation("catSleeping",catImg1);
   cat.scale=0.5;

   mouse=createSprite(200,600); 
   mouse.addAnimation("mouseStanding",mouseImg1);
   mouse.scale=0.10;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x<(cat.width-mouse.width)/2)

    {
      cat.velocityX=0;
      cat.addAnimation("catLastImage",catImg3);
      cat.x=300;
      cat.scale=0.2;
      cat.changeAnimation("catLastImage");
      mouse.addAnimation("mouseLastImage",mouseImg3); 
      mouse.scale=0.15;
      mouse.changeAnimation("mouseLastImage");
    }//
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here 
   
  if(keyDown(LEFT_ARROW))
     cat.velocityX=-4;
     cat.addAnimation("catRunning",catImg2);

     mouse.addAnimation("mouseCaught",mouseImg2);

}
