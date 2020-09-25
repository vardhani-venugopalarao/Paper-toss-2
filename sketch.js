
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,700,1600,40);
	
	dustbin = new Dustbin(1200,650);

	paper = new Paper(200,200,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  ground.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x: 450,y: -450})
	}
}

