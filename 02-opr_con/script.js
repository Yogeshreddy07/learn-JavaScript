//single line comments
/*
This 
is 
multiline comment ->>>the part of comment will not be displayed
*/
console.log("Hello World")
//operators 
/*
Arthimatic Operation:
-,+,*,/,%,**

let a=5;
let b=2;
console.log("a =",a,"b =",b);
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b); // modulo
console.log("a ** b =",a**b); //exponential

//unary operator
let a=5;
let b=2;
a++ // incremented one
a=a+1 // incremented one
console.log("a =",a,"b =",b); //a=7
a--
console.log("a =",a,"b =",b); //a=6 */
//assingment operator
/*
= ,+=,-=,%=,**=

let a=5;
let b=2;
console.log("a =",a) 
console.log("a =",a+=4) //a=a+4 
console.log("a =",a-=4) //a=a-4
console.log("a =",a*=4) //a=a*4
console.log("a =",a/=4) //a=a/4
console.log("a =",a%=4) //a=a%4
console.log("a =",a**=4) //a=a**4

//comparison operator
let a=5;
let b=2;
let c="5"; //string->number in javascript
console.log("a == b",a==b) //a==b
console.log("a != b",a!=b) //a==b
console.log("a == c",a==c) //a==b  truee
console.log("a === c",a===c) //a===b false checks both equal to and data type.
console.log("a < b",a<b) //a<b
console.log("a <= c",a<=c) //a<=b
*/
//logical operators
/*
&&-->AND,
||-->OR,
! -->NOT

let a=5;
let b=2;
let con1=a>b;
let con2=a === b;
console.log("a && b= ",con1&&con2) //a AND b
console.log("a || b= ",con1||con2) //a OR b
console.log("!(a || b)= ",!(con1||con2))// !(a OR b)
// conditionam statements
// if - else - else if
age=15
if (age>18){
    console.log("Can Vote")
}
if (age<18){
    console.log("Can't Vote")
} 
let mode="Dark";
let color;
if (mode=="Dark"){
    color="Black";
}
// if (mode=="Light"){
//     color="White";} 
else{              
    color="White";
}
console.log(color);
    
//odd or even
let num =1;
if (num%2=== 0){
    console.log("even ",num)
}
else{
    console.log("odd ",num)
}

//else if ->> chicking elseif where after if is not exicuted
let age=19;
if (age<=18){
    console.log("junior");
}else if(age>=60){
    console.log("Senior");
}else{
    console.log("middle");
}
if (age<=18) console.log("junior");

let result=age>=18 ? "adult" : "not adult";
console.log(result)


const expr="yogesh";
switch (expr){
    case "yogesh":
        console.log("the name is yogesh")
        break;
    case "reddy":
        console.log("the name is reddy")
        break;
}


//for checking multiple of 5
let a=prompt("Enter a number:")
if (a%5==0){
    console.log("The number",a,"is multiple of 5.")
}else{
    console.log("The number",a,"not a multiple of 5")
}*/
let marks=prompt("Enter the marks:")
if (marks>=90 && marks<=100){
    console.log("A")
}
else if (marks>=70 && marks<=89){
    console.log("B")
}
else if (marks>=60 && marks<=69){
    console.log("C")
}
else if (marks>=50 && marks<=59){
    console.log("D")
}
else if (marks>=101){
    console.log("Entered score above hundred not valid!")
}
else{
    console.log("F")
}