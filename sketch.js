const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
   var ground;
   var  dustbin;
   var world,engine;
   var sling;
   var gameState = "onSling";
    
    
    function preload(){
    
    }
    
    function setup() {
        createCanvas(800, 500);
        rectMode(CENTER);

        engine = Engine.create();
        world = engine.world;

        ground = new Ground(400,490,800,20);
        paper = new Paper(200,100,70);
        dustbin = new Dustbin(600,480);
        sling = new SlingShot(paper.body,{x:200, y:250});
        Engine.run(engine);
    }
    
    
    function draw() {
      rectMode(CENTER);
      background(220);
    
    
      paper.display();
     dustbin.display();
     ground.display();
     sling.display();
    
      
      
     
    }
    
    function mouseDragged(){
      //if (gameState!=="launched"){
          Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
      //}
  }
  
  
  function mouseReleased(){
      sling.fly();
      gameState = "launched";
  }
  
  function keyPressed(){
      if(keyCode === 32){
          paper.trajectory=[];
          Matter.Body.setPosition(paper.body, {x:200 , y: 50});
         sling.attach(paper.body);
      }
  }
    
    