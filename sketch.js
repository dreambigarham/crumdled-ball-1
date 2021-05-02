
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Line = Matter.Line;
var paper1
var ground
var line1
var line2
var line3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new Paper(200,600,20,20)
ground=new Dustbin(400,650,800,20)
	Engine.run(engine);
 line1= new Dustbin (600,590,20,100);
 line2= new Dustbin (660,630,100,20)
 line3= new Dustbin (720,590,20,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display()
  ground.display() 
 line1.display()
 line2.display()
 line3.display()
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60})
}

}

  
