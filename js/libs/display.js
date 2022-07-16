class Display {
  constructor(name,width,height,wip,hip) {
    this.name=name;
    this.width=width;
    this.height=height;
    this.wip=wip;
    this.hip=hip;
  }
  appendTo(con){
    con.innerHTML+=`<canvas id="${this.name}" width="${this.width}" height="${this.height}"></canvas>`;
    this.ctx=document.querySelector(`#${this.name}`).getContext('2d');
    return this;
  }
  png(pixlist,withClear=true){
    if(withClear){
      this.ctx.clearRect(0,0,this.width,this.height);
    }
    for (var pixel of pixlist) {
      this.ctx.fillStyle=pixel.color;
      this.ctx.fillRect(pixel.x*this.width/this.wip,pixel.y*this.height/this.hip,this.width/this.wip,this.height/this.hip);
    }
    return this;
  }
  jpg(rectlist,withClear=true){
    if(withClear){
      this.ctx.clearRect(0,0,this.width,this.height);
    }
    for (var rect of rectlist) {
      this.ctx.fillStyle=rect.color;
      this.ctx.fillRect(rect.x*this.width/this.wip,rect.y*this.height/this.hip, rect.width*this.width/this.wip,rect.height*this.height/this.hip);
    }
    return this;
  }
}
///////////////////////////////////////
/*var a = new Display('p1',300,300,300,300).appendTo(document.body);
var bg =
[
  {x:0,y:0,color:'blue',width:5,height:40},
  {x:0,y:0,color:'blue',width:40,height:5},
  {x:300-5,y:300-40,color:'blue',width:5,height:40},
  {x:300-40,y:300-5,color:'blue',width:40,height:5},

  {x:300-5,y:0,color:'blue',width:5,height:40},
  {x:0,y:300-5,color:'blue',width:40,height:5},
  {x:0,y:300-40,color:'blue',width:5,height:40},
  {x:300-40,y:0,color:'blue',width:40,height:5},

  {x:150-2,y:130,color:'blue',width:5,height:40},
  {x:130,y:150-2,color:'blue',width:40,height:5},
  {x:150-3,y:130,color:'blue',width:5,height:40},
  {x:130,y:150-3,color:'blue',width:40,height:5}
]
a.jpg(bg);*/
