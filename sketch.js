const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 	
}

function setup() 
{
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,690,1600,30)
	D1= new Dustbin(1300,665,170,20);
	D2=new Dustbin(1205,615,20,120);
    D3=new Dustbin(1395,615,20,120);

   
	paper= new Paper (100, 360, 20);

  
}


function draw() 
{
	
  background("lightSkyBlue");
	
  Engine.update(engine);
	
  rectMode(CENTER);
  background(0);

  
  
  drawSprites();
 paper.display();
 ground.display();
 D1.display();
 D2.display();
 D3.display();
}

function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:55, y:-30});

	}

}
