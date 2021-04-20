
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var box1,box2,box3;

var ball;


function setup() {
	createCanvas(600,400);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	ground = new Ground(0,350,600,10);

	box1 = new Box(350,325,10,50);
	box2 = new Box(380,345,50,10);
	box3 = new Box(400,325,10,50);

	ball = new Ball(100,340,20);
	
	Engine.run(engine);
  
}


function draw() {
	

	background(51);

	ground.display();
	
	box1.display();
	box2.display();
	box3.display();

	ball.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.bodies,ball.bodies.position,{x:60,y:-80});
	}
}
