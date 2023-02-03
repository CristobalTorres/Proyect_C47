var score =0;
var gun,bluebubble,redbubble, bullet, backBoard, blast, gameOver;

var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg,backGroundImg;

var redBubbleGroup, redBubbleGroup, bulletGroup;


var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
  backGroundImg= loadImage("backgroundimg.jpg")
  blastImg = loadImage("blast.png")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();  
  blastGroup = createGroup(); 
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
  
}

function draw() {
  background(backGroundImg);
  
  heading.html("Vida: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Puntuación: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)
  
  if(gameState===1){
    gun.y=mouseY  

    if (frameCount % 80 === 0) {
      drawblueBubble();
    }

    if (frameCount % 100 === 0) {
      drawredBubble();
    }

    if(keyDown("space")){
      shootBullet();
    }

    if (blueBubbleGroup.collide(backBoard)){
      handleGameover(blueBubbleGroup);
      
    }
    if (redBubbleGroup.collide(backBoard)) {
      handleGameover(redBubbleGroup);
     
    }
    
    //1reto
    if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
      blast=createSprite(150, width, 50,20) 
       blast.y= bluebubble.y,bluebubble.x
      blast.addImage(blastImg)
      blast.scale=0.12
      blastGroup.add(blast)
    }

    if(redBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(redBubbleGroup);
      blast=createSprite(150, width, 50,20) 
     blast.y= bluebubble.y,bluebubble.x
   blast.addImage(blastImg)
   blast.scale=0.12
   blastGroup.add(blast)
    }

    drawSprites();
  }
    
  
}

function drawblueBubble(){
  bluebubble = createSprite(800,random(20,780),40,40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale = 0.1;
  bluebubble.velocityX = -8;
  bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble);
}
function drawredBubble(){
  redbubble = createSprite(800,random(20,780),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale = 0.1;
  redbubble.velocityX = -8;
  redbubble.lifetime = 400;
  redBubbleGroup.add(redbubble);
}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}

function handleBubbleCollision(bubbleGroup){
    if (life > 0) {
       score=score+1;
    }
  
    blastGroup.destroyEach()
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()
}

function handleGameover(bubbleGroup){
  //2reto
    life=life-1;
    bubbleGroup.destroyEach();

    
    
    
    if (life === 0) {
      gameState=2
      //adicion personal
     GameOver();
     // .sweetalert({
     //   title:`FIN DEL JUEGO`,
     //   text:"UPS, lo de liste a todos lo objetivos",
     //   imageUrl:"https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
     //   confirmButtonText:"OK"
    //  })
    }
    
      console.log(life)
     
        
      
  
    
}
//adicion personal
function GameOver(){
  gameOver = createElement("h1")
  gameOver.html("FIN DEL JUEGO")
  gameOver.style('color:red')
  gameOver.position(250,250)
  

}