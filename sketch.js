const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	rope1=new rope(bob1,roof,-80,0)
	rope2=new rope(bob2,roof,-120,0)
	rope3=new rope(bob3,roof,0,0)
	rope4=new rope(bob4,roof,40,0)
	rope5=new rope(bob5,roof,80,0)
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob.position.x,bob.position.y)
	}
}