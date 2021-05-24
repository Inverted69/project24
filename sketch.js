const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(200,350,20);
    stone = new Stone(350,50,80,80);
    iron = new Iron(500,250,80,80);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
 
    show();
}

function show(){
    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
}