class Dice {
  constructor(name,initalNum,sideFunc) {
    this.name=name;
    this.sidesCount=6;
    this.initalNum=initalNum;
    this.sideFunc=sideFunc;
    this.sides=[];
    for (var i = 0; i < this.sidesCount; i++) {
        this.sides.push(sideFunc(initalNum,i));
    }
  }
  appendTo(el) {
    this.html=`
    <div class="p3D" id=${this.name}>
      <div class="${this.name}Side side side1" id="${this.name}1">${this.sides[0]}</div>
      <div class="${this.name}Side side side2" id="${this.name}2">${this.sides[1]}</div>
      <div class="${this.name}Side side side3" id="${this.name}3">${this.sides[2]}</div>
      <div class="${this.name}Side side side4" id="${this.name}4">${this.sides[3]}</div>
      <div class="${this.name}Side side side5" id="${this.name}5">${this.sides[4]}</div>
      <div class="${this.name}Side side side6" id="${this.name}6">${this.sides[5]}</div>
    </div>`;
    el.innerHTML+=this.html;
  }
  roll(power){
    this.rollPowerArr=[
      Number((Math.random()*power).toFixed()),
      Number((Math.random()*power).toFixed()),
      Number((Math.random()*power).toFixed())
    ];
    this.rollArr=[0,0,0];
    this.rolling=true;
    this.interval=setInterval(()=>{
      if (this.rolling) {
        console.log('asdfghj');
        this.rollArr[0]+=this.rollPowerArr[0];
        this.rollArr[1]+=this.rollPowerArr[1];
        this.rollArr[2]+=this.rollPowerArr[2];
        console.log(this.rollArr);
        console.log(getElement("#"+this.name));
        getElement("#"+this.name).style.transform=`rotateZ(${this.rollArr[0]}deg) rotateX(${this.rollArr[1]}deg) rotateY(${this.rollArr[2]}deg)`;
      }else {
        getElement("#"+this.name).style.transform=`rotateZ(${this.rollArr[0]}deg) rotateX(${Number((this.rollArr[1]/90).toFixed())*90}deg) rotateY(${Number((this.rollArr[2]/90).toFixed())*90}deg)`;
        clearInterval(this.interval);
      }
    },500);
  }
}
