const textbox=document.getElementById("textbox")
const c=document.getElementById("c")
const f=document.getElementById("f")
const result= document.getElementById("result")
let temp;
const button=document.getElementById("button1")
button.onclick=function(){
    if(c.checked){
        temp=Number(textbox.value) 
        temp=temp*(9/5)+32;
        result.textContent=temp.toFixed(1)+"F"
    }
    else if(f.checked){
        temp=Number(textbox.value) 
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"c"
    }
    else{
        result.textContent='Select a unit'
    }
}
