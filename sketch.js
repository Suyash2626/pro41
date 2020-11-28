var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var drop,umbrella;
var maxDrops=100;
var i1,i2,i3,i4;



function preload(){
    i1=loadImage("1.png")
    i2=loadImage("2.png")
    i3=loadImage("3.png")
    i4=loadImage("4.png")

}

function setup(){
   createCanvas(800,800);
   umbrella=new Umbrella(500,500);
   for(var i=0;i<maxDrops;i++){
      drops.push(new createDrop(random(0,400),random(0,400)));
   }
    
}

function draw(){
   Engine.update(engine);
drop.display();
umbrella.display();




}   

