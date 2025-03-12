//Functions
/*
function myfunction(){                               //function definition
    console.log("we learn JS From Apna Collage")
};
myfunction();                                        //function call
function myfunction1(msg){
    //parameter for input..
    console.log(msg)
}
myfunction1("hello world")

function sum(num1,num2){
    let sum=num1+num2
    console.log(sum)
}
sum(12,23)
//using return
function sum_return(num1,num2){ //num1 ,num2 local variable cnt be defined outside
    let sum=num1+num2;
    return sum     //after return the next code will not exicute
}
sum_re=sum_return(12,23)
console.log(sum_re)

function sum(a,b){
    return a+b
}function mul(a,b){
    return a*b
}
let sums=sum(1,2);
let muls=mul(9,12);
console.log(sums,muls)

let arrowsum =(a,b)=>{
    console.log(a+b)
}
arrowsum(22,22);

function myfunction2(str){
    let count=0
    for(let i=0;i<=str.length;i++){
        if (str[i]=="a" || str[i]=="e"|| str[i]=="i"|| str[i]=="o"|| str[i]=="u"){
            count=count+1
        }
    }
    console.log(count)
}

myfunction2("hello")

let myfunction3=(str)=>{
    let count=0
    for(let i=0;i<=str.length;i++){
        if (str[i]=="a" || str[i]=="e"|| str[i]=="i"|| str[i]=="o"|| str[i]=="u"){
            count=count+1
        }
    }
    console.log(count)
}
myfunction3("hello")*/
arr=[1,2,3,4,5]
arr.forEach((arr) => {
    console.log(arr**2)
});
