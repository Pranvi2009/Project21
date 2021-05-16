var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music1 = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(280,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(480,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(680,580,230,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = 5;
    ball.velocityX = 7;

}

function draw() {
    background(rgb(169,169,169));
    music1.play();
    edges=createEdgeSprites();
    ball.bounceOff(edges);
   
   
    
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        ball.velocityX = 0;
        ball.velocityY = 0;
        
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        
        
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
       
       

        
    }



    if(block4.isTouching(ball)){
        ball.shapeColor = "green";
        ball.velocityX = 0;
        ball.velocityY = 0;
        
       
    }


    drawSprites();
}
