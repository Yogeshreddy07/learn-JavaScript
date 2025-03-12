//increse-decrese-reset
let decreseBtn=document.getElementById("decreseBtn");
let resetBtn=document.getElementById("resetBtn");
let increseBtn=document.getElementById("increseBtn");
let countLabel=document.getElementById("count")
let count=0;
decreseBtn.onclick=function(){ //used for decreseing
    count--
    countLabel.textContent=`${count}`
}
resetBtn.onclick=function(){ //used for reset
    count=0
    countLabel.textContent=`${count}`
}
increseBtn.onclick=function(){//used for increseing
    count++
    countLabel.textContent=`${count}`
}
