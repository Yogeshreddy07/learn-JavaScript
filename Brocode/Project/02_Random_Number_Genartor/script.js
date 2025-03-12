//Random Number genartor
const min=50;
const max=100;
let random =Math.floor(Math.random()*(max- min))+min;
let ba=document.getElementById("btn");
let p=document.getElementById("p");
ba.onclick=function(){
    p.textContent=`The random num is ${random}`
}