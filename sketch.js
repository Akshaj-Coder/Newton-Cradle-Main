const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var bob1, bob2,bob3,bob4,bob5;
var Roof;
var rope;
var rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//We make the Bodies over here by inheriting the code from our class files.
	Roof = new roof(400,80,500,40);

	
	bob1 = new bob(-200,300,60);
	bob2 = new bob(-139,300,60);
	bob3 = new bob(-78,300,60);
	bob4 = new bob(-17,300,60);
	bob5 = new bob(43,300,60);

	rope = new Rope(bob1.body,{x:-200, y:10});
	rope1 = new Rope(bob2.body,{x:-140,y:10});
	rope2 = new Rope(bob3.body,{x:-80,y:10});
	rope3 = new Rope(bob4.body,{x:-20,y:10});
	rope4 = new Rope(bob5.body,{x:40,y:10});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);

  //We use the display function to display the Bodies.

  Roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:0});
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:85,y:0});
	}
}

