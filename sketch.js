const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world;
var ground,ball,box1;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
 var options={
   isStatic:true
 }
  ground=Bodies.rectangle(200,390,400,10,options)
World.add(world,ground)
var balloptions={
  restitution:1.0
}
ball=Bodies.circle(200,100,20,balloptions)
World.add(world,ball)
box1=new Box()
//console.log(object)
//console.log(object.position.x)
//console.log(object.position.y)
}

function draw() {
  background("black");  
  Engine.update(engine)
rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
box1.display()
}