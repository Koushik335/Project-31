class Particle{
  constructor(x,y,r){
      var options = {
         restitution:0.6,
         isStatic:false,
         friction:1
      }
      this.x=x
      this.y=y
      this.r=r
      this.body=Bodies.circle(this.x,this.y,this.r,options)
      this.color = color(random(0,255),random(0,255),random(0,255))
      World.add(world,this.body)
  }
  display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      fill(this.color)
      ellipseMode(RADIANS)
      ellipse(0,0,this.r*2,this.r*2);
      pop()
      
    }
  
}