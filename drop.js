class Drop{
    constructor(x,y){
        var options={
            friction=0.1
        }
        this.r=r;
       this.body=Bodies.circle(x,y,this.r,options);
       World.add(world,this.body)
    }

    display(){
     
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }




        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
    }

    



}