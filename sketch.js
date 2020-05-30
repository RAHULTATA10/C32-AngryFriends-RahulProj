const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var BALL, slingshot;
var boy1, boy2, boy3, boy4, boy5;
var ground, invisground1, invisground2, invisground3;
var bench1, chair1;
var score = 0;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/background.jpg");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(600,height,1200,20);
    invisground1 = new Ground(350,250,125,20);
    invisground2 = new Ground(1075,180,125,20);
    invisground3 = new Ground(1125,430,125,20);

    platform = new Ground(150, 305, 300, 170);

    BALL = new Ball(200,50);

    boy1 = new Boy1(810, 350);
    boy2 = new Boy2(810, 220);
    boy3 = new Boy3(350, 240);
    boy4 = new Boy4(1075,145);
    boy5 = new Boy5(1070,400);
    
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    log1 = new Log(810,260,300, PI/2);
    log3 =  new Log(810,180,300, PI/2);    
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bench1 = new Bench(375,240,100,80);
    bench2 = new Bench(1050,150,100,80);
    chair1 = new Chair1(1125,420,125,125);
    
    slingshot = new SlingShot(BALL.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    text("Score  " +score, 600, 30);
    Engine.update(engine);

    textSize(30);
    textFont("Verdana");
    stroke("red");
    fill("red");

    BALL.display();
    ground.display();
   
    platform.display();
    
    boy1.display();
    boy2.display();
    boy3.display();
    boy4.display();
    boy5.display();

    boy1.score();
    boy2.score();
    boy3.score();
    boy4.score();
    boy5.score();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    log1.display();
    log3.display();
    log4.display();
    log5.display();

    bench1.display();
    bench2.display();
    chair1.display();

    slingshot.display(); 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(BALL.body, {x: mouseX , y: mouseY});
    }
}
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

