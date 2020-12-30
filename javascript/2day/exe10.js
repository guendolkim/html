const box = new Object();
box.color = "red";
box.size = 10;
box.amount = 0;
box.fill = function(){
  this.amount += 2;
}
box.consume = function(){
  this.amount -= 2;
}
console.log(box);


console.log(box.fill);
console.log(box.consume);

let n=[];
for(let i=0; i <10 ; i++){
  n[i] =  Math.floor(Math.random*100)+1;
}
console.log(n[1]);