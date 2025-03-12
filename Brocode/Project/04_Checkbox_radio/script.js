//checkbok and radio submit btn click
const mycheckbox=document.getElementById("mycheckbox")
const visabtn=document.getElementById("visabtn")
const masterbtn=document.getElementById("masterbtn")
const paypalbtn=document.getElementById("paypalbtn")
const check=document.getElementById("check")
const subresult=document.getElementById("p1")
const paymentresult=document.getElementById("p2")
check.onclick=function(){
    if(mycheckbox.checked){
        subresult.textContent="You Are Subscribed !"
    }
    else{
        subresult.textContent="You Are Not Subscribed !"
    }
    if(visabtn.checked){
        paymentresult.textContent="You Are Paying With Visa Card"
    }
    else if(masterbtn.checked){
        paymentresult.textContent="You Are Paying With Master Card"
    }
    else if(paypalbtn.checked){
        paymentresult.textContent="You Are Paying With paypal Card"
    }
    else{
        paymentresult.textContent="You Have Not Selected a card select one"  
    }
}