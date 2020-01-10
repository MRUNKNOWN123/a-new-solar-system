const Engine=Matter.Engine;
const Bodies=Matter.Bodies
const World=Matter.World;


function setup()
{
    createCanvas(750,600);

    engine=Engine.create();
    world=engine.world;
var option =
 {
     isStatic : true
 }
    sun=Bodies.circle(10,300,100,Option);
 
    mercury=Bodies.circle(150,249,10,Option);
    venus=Bodies.circle(200,350,20,Option);
    earth=Bodies.circle(250,300,20,Option);
    mars=Bodies.circle(300,400,25,Option);
    jupiter=Bodies.circle(400,150,45,Option);
    saturn=Bodies.circle(500,550,30,Option);
    uranus=Bodies.circle(600,225,30,Option);
    neptune=Bodies.circle(700,330,30,Option);
}

function draw ()
{
    background(55);

    ellipseMode(RADIUS);
    fill(255,242,0);
    ellipse(sun.position.x,sun.position.y,100);
    fill(64,0,0);
    ellipse(mercury.position.x,mercury.position.y,10);
    fill(128,0,0);
    ellipse(venus.position.x,venus.position.y,20);
    fill(0,0,255);
    ellipse(earth.position.x,earth.position.y,20);
    fill(255,0,0);
    ellipse(mars.position.x,mars.position.y,25);
    fill(128,64,64);
    ellipse(jupiter.position.x,jupiter.position.y,45);
    fill(255,128,0);
    ellipse(saturn.position.x,saturn.position.y,30);
    fill(0,0,128);
    ellipse(uranus.position.x,uranus.position.y,30);
    fill(0,0,255);
    ellipse(neptune.position.x,neptune.position.y,30);

}