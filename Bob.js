class Bob{
    constructor(posx, posy, radius){
        var options = {
			isStatic:false,
          restitution:1.2,
			    friction:0,
		     	density:2.0
			}
	  	this.x = posx;
		  this.y = posy;
		  this.r = radius;
		  this.body = Bodies.circle(this.x, this.y, (this.r)/2, options)
	   	World.add(world, this.body);
	}
	display(){
    var pos = this.body.position;
	  push();
	  translate(pos.x, pos.y);
	  ellipseMode(CENTER);
	  fill(255, 50);
    stroke(255);
    strokeWeight(2);
	  ellipse(0, 0, this.r, this.r);
	  pop();
        }
    }
