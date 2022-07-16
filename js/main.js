var test=new Dice('test',1,(n,i)=>n+i)
test.appendTo(body);
test.roll(1000);
window.oncontextmenu=e=>{
e.preventDefault();
test.rolling=false;
}
