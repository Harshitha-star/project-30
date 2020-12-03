const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(10,340,1200,20);
    ground2 = new Ground(400,250,150,30);
    ground3 = new Ground(800,250,150,50);
    block1 = new Box(330,235,30,40);
    block2 = new Box(360,235,30,40);
    block3 = new Box(390,235,30,40);
    block4 = new Box(420,235,30,40);
    block5 = new Box(450,235,30,40);
    block6 = new Box(360,195,30,40);
    block7 = new Box(390,195,30,40);
    block8 = new Box(420,195,30,40);
    block9 = new Box(390,155,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    image(this.polygon,"polygon.png");
    slingshot = new slingshot(this.polygon,{x:100,y:200});


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    ground3.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){ slingshot.attach(polygon.body);
}
}
}