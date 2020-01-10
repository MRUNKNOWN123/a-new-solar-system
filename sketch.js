const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World



function setup(){

    createCanvas(600,600)

    engine=Engine.create();
    world=engine.world;
 var options=
    {
        isStatic: true,
        friction:  -2
    }
   
    square=Bodies.rectangle(300,50,50,50);
    World.add(world,square);

    ground=Bodies.rectangle(300,590,600,50,options);
    World.add(world,ground);

    var ball_option=
    {
        restitution:0.75,
        friction:  -2
    }

    ball=Bodies.circle(200,50,40,ball_option);
    World.add(world,ball);
    


   
}

function draw(){

    background(55);
    Engine.update(engine)
    rectMode(CENTER);
    rect(square.position.x,square.position.y,50,50);

    rect(ground.position.x,ground.position.y,600,50);
   
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40);
  // ellipse.debug=true;
}