const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird
var pig
var log

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,550,50,50);
    box2 = new Box(900,550,50,50);
    ground = new Ground(600,height,1200,20)
    bird = new Bird(40,40)
    pig = new Pig(800,550)
    log = new Log(800,520,300,PI/2)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig.display();
    log.display();
}