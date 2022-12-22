
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball;
var bottom;
var leftside;
var rightside;
var balls_options


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	  world = engine.world;
	
	//Create the Bodies Here.
	

	var balls_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:3
		
	};
	ball = Bodies.circle(200,200,20,balls_options);
	World.add(world,ball);
	
	  
  
	  bottom = new Ground(500,690,1000,20);
	leftside = new Ground(900,650,10,100);
	rightside = new Ground(980,650,10,100);
  
  
	  
	  rectMode(CENTER);
  
  
	  Engine.run(engine);
}


function draw() {
  background(100);

  bottom.show()
  leftside.show()
  rightside.show()
  ellipse(ball.position.x,ball.position.y,20);
  
  //ground.display()
  drawSprites();
 
}



function keyPressed() {
  if (keyCode === UP_ARROW){
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:127, y:35})
  }


}