class Ball{
    constructor(x,y,radius){

        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:2.0
        }

        this.bodies = Bodies.circle(x,y,radius,options);
        World.add(world,this.bodies);

        this.r = radius;
    }
    display(){
        var pos = this.bodies.position;

        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r);
    }
}