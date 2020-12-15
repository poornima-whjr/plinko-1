const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var particles = [];
var divisions = [];
var plinkos = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create(engine);
  world = engine.world;
  
  ground = new Ground(240,height-5,480,10);
  
  for(var k = 0; k <= width; k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var k = 40; k <= width; k = k+50){
    plinkos.push(new Plinko(k,75));
  }

  for(var k = 15; k <= width; k = k+50){
    plinkos.push(new Plinko(k,175));
  }

  for(var k = 40; k <= width; k = k+50){
    plinkos.push(new Plinko(k,275));
  }

  for(var k = 10; k <= width; k = k+50){
    plinkos.push(new Plinko(k,375));
  }

  for(var k = 10; k <= width; k = k+50){
    plinkos.push(new Plinko(k,375));
  }


  Engine.run(engine);

}

function draw() {
  background(0);  
  ground.display();
  for(var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }
  
  for(var k = 0; k<plinkos.length; k++){
    plinkos[k].display();
  }
  
  if (frameCount % 40 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10));
  }

  for(var k = 0; k<particles.length; k++){
    particles[k].display();
  }
  
}