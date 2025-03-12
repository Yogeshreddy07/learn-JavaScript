let in1 = document.getElementById("in1");
let sub1 = document.getElementById("sub1");
let p1 = document.getElementById("p1");
let age;
 sub1.onclick=function(){
    age=in1.value
    age=Number(age)
if (age>=18 && age<=120){
    p1.textContent=`you are old enough to enter the site.`
}
else if(age<0){
    p1.textContent=`you are age can't be less then 0.`
}
else if(age==0){
    p1.textContent=`you are just born :).`
}
else if(age<18){
    p1.textContent=`you must be 18+ to view the site.`
}
else{
    p1.textContent=`you are age can't be more then 120.`    
}
    
}
