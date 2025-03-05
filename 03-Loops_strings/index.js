//Loops in Js
/*
for(let i=1;i<=5;i++){
    console.log("Yogesh reddy") //5 times Yogesh reddy
}
console.log("loop ended")

n=prompt("Enter the number")// for input in the browser
sum=0
for(i=1;i<=n;i++){
    sum+=i
}
console.log(sum)

for (i=1;i<=5;i++){
    console.log("i=",i)
}

//while
let i=1
while(i<=5){
    console.log(i)
    i++
}
//do while
i=1
do{
    console.log(i)
    i++
}while(i<=5);

//for of loop
str="Yogesh Reddy" 
for(let i of str){  //iterator-> characters loop used to print th strings
    console.log(i)
}
   
namee={
    name:"yogesh",
    Lname:"reddy",
    rno:"2022BIFT07AED026"
}
for (let key in namee){
    console.log(key,namee[key])
}  
//using do while
for(let i=0;i<=100;i+=2){
    console.log(i)
}
//using while
let i=0
while(i<=100){
    console.log(i)
    i+=2

//for + if
for (let i=1;i<=100;i++){
    if (i%2==0){
        console.log(i)
    }
}

//For odd
for (let i=1;i<=100;i++){
    if (i%2!=0){
        console.log(i)
    }
}

//the game made for gussing
let loop = (prompt("Enter the guess loop:"));
let num = (prompt("Enter the guess num:"));
let guss_num = 5;

for (let i = 1; i <= loop; i++) {
    if (num != guss_num) {
        num = (prompt("Your guess is incorrect. Try again:"));
    } else {
        console.log("You found it!");
        break;  // Stop the loop once the correct number is guessed
    }
}

if (num !== guss_num) {
    console.log("Out of attempts! The correct number was " + guss_num);
}

//strings
let str1="Yogesh reddy"
let str2="S"
s=str1.length   // to conut the length ofstrs
console.log(s)
console.log(str1[1]) //indexing
//templete string
console.log(`the name is ${str1} and the length is ${s}`)
console.log(`the string is ${str1} and the UPPERCASE is ${str1.toUpperCase()}`)
console.log(`the string is ${str1} and the lowercase is ${str1.toLowerCase()}`)
console.log(`the string is ${str1} and the trim is ${str1.trim( )}`)
console.log(`the string is ${str1} and the slice is ${str1.slice(3,5)}`) //es
console.log(`the string is ${str1} and the trim is ${str1.trim( )}`)
console.log(`the string is ${str1} and ${str2} and the string concatination is ${str1.concat( str2)}`) 
console.log(`the string is ${str1} and ${str2} and the string concatination is ${str1+ str2}`) 
console.log(`the string is ${str1} and replacing "r"->"R"is ${str1.replace("r","R")}`) //Yogesh Reddy
   */
let userinput=prompt("enter the fullname:");
let x=`@`+userinput+ userinput.length;
console.log(x)  //@yogesh6
