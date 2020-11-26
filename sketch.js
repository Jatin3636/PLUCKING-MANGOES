
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6;
var tree;
var basket1,basket2,basket2IMG;
var invisibleStopper1,invisibleStopper2;
function preload() {
	basket2IMG = loadImage("basket2.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(400,670,800,20);
	mango1 = new Mango(720,400,20);
	mango2 = new Mango(660,380,20);
	mango3 = new Mango(600,320,25);
	mango4 = new Mango(650,310,20);
	mango5 = new Mango(550,370,22);
	mango6 = new Mango(600,400,27);
	tree = new Tree(500,270);
	basket1 = new Basket(650,650);
	basket2 = createSprite(650,660,2,2);
	basket2.addImage(basket2IMG);
	basket2.scale = 0.825;
	stone = new Stone(83,530,20);
	sl = new SlingShot(stone.body,{x:105,y:550});
	boy = new Boy(70,500);
	invisibleStopper1 = new InvisibleStopper(540,650,2,80);
	invisibleStopper2 = new InvisibleStopper(750,650,2,80);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  tree.display();
  ground.display();
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  basket1.display();
  //sl.display();
  boy.display();
  stone.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  //invisibleStopper1.display();
  //invisibleStopper2.display();
}

function detectCollision(obj1,obj2) {
	mangoBodyPosition = obj2.body.position
	stoneBodyPosition = obj1.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance <= obj1.radius + obj2.radius) {
		Matter.Body.setStatic(obj2.body, false);
	}
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    sl.fly();
}

function keyPressed() {
    if(keyCode === 32) {
      sl.attach(stone.body);
    }
}