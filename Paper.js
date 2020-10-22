class Paper
 {
    constructor(x,y,r) 
    {
     
      this.trajectory =[];
      var options = {
          isStatic: false,
          restitution:0.33,
          friction:1,
          density:1.2,
         
    }
      this.x=x;
      this.y=y;
      this.r=r
      this.image = loadImage("Pictures/paper.png");
      this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
      World.add(world,this.body);

    }
    display(){
      var paperpos =this.body.position;

      push()
      translate(paperpos.x,paperpos.y);
      rectMode(CENTER);
      fill(255,0,255);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
      pop()

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }

      
    }
  };
  


function keyPressed(){
    if(keyCode === UP_ARROW){
        
    Matter.Body.applyForce(paper.body, paper.body.position,{x:70, y:-150});

    }
}