const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle;
var divisions = [];
var particles = [particle];
var plinkos = [];
var line;

var divisionHeight = 300;

var gameState = "PLAY";

var count = 0;
var score = 0;

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);
  
  
     for (var k = 0; k <=width; k = k + 80) {
       divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
     }
  
  
      for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,75));
      }
  
      for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,175));
      }
  
       for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,275));
      }
  
       for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,375));
      }
  
      
  
      
  }

 

function draw() {
    background(0);
    Engine.update(engine);
    textSize(20)
  text("Score : "+score,20,40);
  fill(255);

  textSize (10);
  text("Click the mouse to drop the particles",630,20);

  textSize(35)
  text(" 300 ", 5, 700);
  text(" 300 ", 80, 700);
  text(" 300 ", 160, 700);
  text(" 300 ", 240, 700);
  text(" 100 ", 320, 700);
  text(" 100 ", 400, 700);
  text(" 100 ", 480, 700);
  text(" 200 ", 560, 700);
  text(" 200 ", 640, 700);
  text(" 200 ", 720, 700);
  
 

    ground.display();
    if ( gameState =="END") {
        background("black");
        fill("red");
        textSize(50);
        text("Game Over", 200, 400);
       
      } 
     
      for(var k = 0; k < plinkos.length; k++) {
       plinkos[k].display();
    }

    if(particle!=null)
    {
      particle.display();
        
        if (particle.body.position.y>700)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+300;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="END";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="END";

              }      
              
        }
    }
    

   
    
  
 for (var i = 0; i < divisions.length; i++) {
     
    divisions[i].display();
  }
  
}


function mousePressed() {
    if(gameState !== "END") {
        count++;
    particle = new Particle(mouseX, 50, 10, 10);
    }
}
