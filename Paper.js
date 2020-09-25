class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.image = loadImage("paper.png")

        this.body = Bodies.circle(x, y, radius-25, options);
        this.radius = radius;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        fill("white");
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2, this.radius*2);
        pop();
        
    }
}