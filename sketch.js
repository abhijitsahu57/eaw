const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    pig1 = new Pig(700,320,70,70);
    pig2 = new Pig(920,320,70,70);
    pig3 = new Pig(810, 350);
    pig4 = new Pig(810,260,300, PI/2);

    pig5 = new Pig(700,240,70,70);
    pig6 = new Pig(920,240,70,70);
    pig7 = new Pig(810, 220);

    pig8 =  new Pig(810,180,300, PI/2);

    pig9 = new Pig(810,160,70,70);
    pig10 = new Pig(760,120,150, PI/7);
    pig11 = new Pig(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("black");
    Engine.update(engine);
    //strokeWeight(4);
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();
    pig8.display();
    pig9.display();
    pig10.display();
    pig11.display();

    bird.display();
    //platform.display();
    //log6.display();
    //slingshot.display();  
    fill("white")  
    text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY" ,200 ,200)
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
     slingshot.attach(bird.body);
    }
}

// make boy more bigger 
// b};. ib ;
//if"{jig"jig"jig"jig"jig"jig"}[
// make make +[]
//]

// ['[[fig . among] //

//[;sadfkpsm'z
 //Z \z'cz'l'\\/
//x;bgm 
// jkm
// make the eboy much smal[;re//
//x 
//x 
//x;\
//c'}:}
//s;x\
//ah
//styleMediaa''x,

//a;'a''as'la\DataCue;/sa
//c]
//nolkh/l'[.l[
//]]