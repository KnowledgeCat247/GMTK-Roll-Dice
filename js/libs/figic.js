const Vector=(x,y,z=0)=>{
  class vector {
    constructor(x1,y1,z1) {
      this.x=x1;
      this.y=y1;
      this.z=z1;
    }
    sum({x:x2,y:y2,z:z2}){
      return Vector(this.x+x2,this.y+y2,this.z+z2)
    }
    sub({x:x2,y:y2,z:z2}){
      return Vector(this.x-x2,this.y-y2,this.z-z2)
    }
    scale(multiplier){
      return Vector(this.x*multiplier,this.y*multiplier,this.z*multiplier)
    }
    divide(divider){
      return Vector(this.x/divider,this.y/divider,this.z/divider)
    }
    dot({x:x2,y:y2,z:z2}){
      return this.x*x2+this.y*y2+this.z*z2;
    }
    get length(){
      return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);
    }
    rotate2D(degs){
      return (this.angle=toRadians(degs),Vector(x*Math.cos(this.angle)-y*Math.sin(this.angle),x*Math.sin(this.angle)+y*Math.cos(this.angle)))
    }
    get negative(){
      return Vector(-this.x,-this.y,-this.z);
    }
    get normalized(){
      return this.divide(this.length);
    }
  }
  return new vector(x,y,z);
}

var min=(value,minimum)=>value < minimum ? minimum : value;
var max=(value,maximum)=>value > maximum ? maximum : value;

var toRadians=(deg)=>(deg * Math.PI) / 180;

var circleCollision2D=({x:circleX,y:circleY},{x:collisionX,y:collisionY},radius)=>Vector(collisionX-circleX,collisionY-circleY).length<=radius;

var lineCollision2D=({x:lx1,y:ly1},{x:lx2,y:ly2},{x:cx,y:cy},accuracy=0.2)=>{
  var d1=Vector(cx-lx1,cy-ly1).length;
  var d2=Vector(cx-lx2,cy-ly2).length;
  var lineLength=Vector(lx2-lx1,ly2-ly1).length;
  return (d1+d2)>(lineLength-accuracy)&&(d1+d2)<(lineLength+accuracy);
};

var rectangleCollision2D=(rectCoords,{x:width,y:height},collpoint,angle=0,{x:pivX,y:pivY}=Vector(0.5,0.5))=>{
   var size=Vector(width,height);
   var cpc=collpoint.sub(rectCoords).rotate2D(-angle);
   var rz=Vector(width*pivX,height*pivY).negative;
   var rmc=size.sub(rz.negative);
   return cpc.x<=rmc.x&&cpc.x>=rz.x&&cpc.y<=rmc.y&&cpc.y>=rz.y;
}

var rectangleProection2D=(rectCoords,{x:width,y:height},collpoint,angle=0,{x:pivX,y:pivY}=Vector(0.5,0.5))=>{
   var size=Vector(width,height);
   var cpc=collpoint.sub(rectCoords).rotate2D(-angle);
   var rz=Vector(width*pivX,height*pivY).negative;
   var rmc=size.sub(rz.negative);
   return Vector(max(min(cpc.x,rz.x),rmc.x),max(min(cpc.y,rz.y),rmc.y)).rotate2D(angle).sum(rectCoords);
}

var circleProection2D=(circleCoords,collCoords,radius)=>collCoords.sub(circleCoords).normalized.scale(max(collCoords.sub(circleCoords).length,radius)).sum(circleCoords);
