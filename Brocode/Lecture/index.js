//variable= A container to stores a value
/*
let age=23;
let price=10.99;
let username="yogesh"
console.log(`${age},${price}`)
console.log(typeof(age))
console.log(typeof(price))
console.log(`the username is ${username} ${typeof(username)}`)
let online = true;
console.log(`yogesh is online ${online} and type is ${typeof(online)}`)

let name="yogesh reddy";
let age= 21;
let student = true;
document.getElementById("p1").textContent =`your name is ${name}`;
document.getElementById("p2").textContent =`your age is ${age}`;
document.getElementById("p3").textContent =`your are a student ${student}`;

//arthimatic Operator
let student=30;
student+=1    //add
console.log(student)
student-=1    //sub
console.log(student)
student*=2    //mul
console.log(student)
student/=2    //div
console.log(student)
student**=2    //expo
console.log(student)
student%=2    //modulo
console.log(student)
//Type 1
let in1 =prompt("hello")
console.log(in1) 
let in2=window.prompt("hello1")
console.log(in2)
//Type 2
document.getElementById("myid").onclick= function(){
    username = document.getElementById("mytext").value;
    document.getElementById("h1").textContent=`Hello ${username}`
}

let age=prompt("How old are you??");
age=Number(age);
age+=1;
console.log(age);

const PI=3.14;
let radius;
let circumference;
document.getElementById("mysub").onclick=function(){
    radius=document.getElementById("myinput").value;
    radius=Number(radius);
    circumference=2*PI*radius
    document.getElementById("h3").textContent= circumference;}

let x=3.21;
let y=2.99;
let z=16
//x=Math.round(x)
x=Math.floor(y) //round to the decrese
y=Math.ceil(y)  //round to the increse
y=Math.trunc(y) //used to remove the decimal value
z=Math.pow(x,y)
sq=Math.sqrt(z)
lo=Math.log(x)
console.log(x , y ,z , sq ,lo)


//If-->condition that given is true the it will execute
let age=21;
if (age>=18){
    console.log("you are old enough to enter the site")
}
else{
    console.log("you must be 18+ to view the site")
}
 
let time=19;
if(time<12){
    console.log("Good Morning !")
}
else if(time>12 && time<17){
    console.log("Good Aftrnoon !")
}
else if(time>17 && time<24){
    console.log("Good Night !")
}

let isstudent=false;
if (isstudent== true){
    console.log("you are a student")
}
else{
    console.log("you are not a student")
}

let age =25;
let license=false;
if(age>=18){
    console.log("you can dirve")
    if(license==true){
        console.log("you can drive")
    }
    else{
        console.log("you can't drive get a license")
    }
}
else if(age<0){
    console.log("age cant be below 0")
}
else{
    console.log("you cant drive ")
}

//ternary operator
let age =1
let message =age>=18 ? "You are Adult":"You are not adult"
console.log(message)
let time =16
let greeting =time<12 ? "good morning" :"good night"
console.log(greeting)

let pa =125;
let discount= pa >=100 ? "get 10% discount":"to get 10% discount u shoud have shoped more the 100"
console.log(discount)

//switch case
let day =1;
switch(day){
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("Tuseday")
        break;
    case 3:
        console.log("wednesday")
        break;   
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;  
    case 6:
        console.log("saturday") 
        break;
    case 7:
        console.log("sunday")
        break; 
    default:
        console.log(`The input given is not a day ${day}`)
    }

//string methods
let name="yogesh reddy"
console.log("name")
console.log(name.charAt(1)) //fletch the char present at that index
console.log(name.indexOf("y")) //find at which place the steing is present
console.log(name.length) //used to find the string len
console.log(name.trim()) // removes the white sapace
console.log(name.toUpperCase()) //makes the string uppercase
console.log(name.toLowerCase()) //makes the string LowerCase
console.log(name.repeat(3)) //used to repeat the string
console.log(name.startsWith(" ")) //used to find start with
console.log(name.endsWith(" ")) //used to find end with
console.log(name.includes(" ")) //find the space is there or not
let phonenum="123-456-789"
console.log(phonenum.replaceAll("-","")) //used to replas=e with exising value
console.log(name.slice(1,3)) //slice -> indexing so, slice(start,end)
let firstname=name.slice(0,name.indexOf(" "))
console.log(firstname)

let lastname=name.slice(name.indexOf(" ")+1)
console.log(lastname)

let email="yogiyogeshreddy@gmail.com"
sl=email.slice(0,email.indexOf("@"))
console.log(sl)
//without method changing
let username=prompt("enter your username:")
username=username.trim()
let letter=username.charAt(0)
letter=letter.toUpperCase()
let extrachar=username.slice(1)
extrachar=extrachar.toLowerCase()
username=letter+extrachar
console.log(username)

//after using method changing
let username=prompt("enter your username:")
username=username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase()
console.log(username)

//while loop used untill the condintion is true that runs the loop

let username= "";
while (username===""||username==null){
    username=prompt("Enter Your name:")
}
console.log(username)
let loggedinn=false;
let username;
let password;
while(!loggedinn){
    username=prompt("Enter the username:")
    password=prompt("Enter Your password")
    if(username==="yogesh" && password=="syr@123syr"){
        loggedinn= true;
        console.log("you are loged in !")
        }
    else{
        console.log("Invalid credentials")
    }
}
//for loop
for (let i=0;i<10;i+=2){
    console.log(i)
}
//function
function happybirthday(name,age){
    console.log(`Happy Birthday ${name} and you are ${age} Years old`)
}
happybirthday("S Yogesh Reddy",20)
happybirthday("Subramani",54)
*/
function add(a,b){
    console.log(`${a} + ${b} = ${a+b}`)
}
add(12,22)
function addreturn(a,b){
   let sum =a+b
   return(sum)
}
console.log(addreturn(12,22))