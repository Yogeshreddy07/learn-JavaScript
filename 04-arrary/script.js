/*let marks =[98,78,78,56,45];
console.log(marks) 
console.log(marks.length) //prints the length
let names=["yogesh","reddy","mani"]
console.log(names)
console.log(typeof(names)) //object
console.log(names[0])//used to prints the first name
names[2]="reddy" 
console.log(names)
let str="yogesh "
str.replace("y","r")
console.log(str) 
//for loop
let arr=[1,2,3,4,5]
for(let i=0;i<=arr.length;i++){
    console.log(arr[i])
}
//for in
let arr=[1,2,3,4,5]
for(let i of arr){
    console.log(i)
}
    
let arr=["yogesh","reddy","mani"]
for(let i of arr){
    console.log(i.toUpperCase())
}
let arr=[85,97,44,37,76,60]
let sum=arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]
let avg=sum/6
console.log(`sun=${sum} and the avg=${avg}`)

let arr=[85,97,44,37,76,60]
var sum=0
for(let i=0;i<=arr.length-1;i++){
    var sum=sum+arr[i]
}
avg=sum/arr.length
console.log(`sun=${sum} and the avg=${avg}`)

let item=[250,645,300,900,50]
let items =0
let sum=0
for (let i=0;i<=item.length-1;i++){
    items=item[i]*0.10
    with_discount=item[i]-items
    console.log(with_discount)
    sum+=with_discount
}
console.log(`the total discunt sum is:${sum}`)

let veggies=["potato","apple","lithchi","banana"]
let marks=[1,2,2,3,4]
veggies.push("chips")//used to add at last 
console.log(veggies)
veggies.pop() //to remove the 
console.log(veggies)
console.log(veggies.toString()) //potato,apple,lithchi,banana
console.log(marks.toString())  //1,2,2,3,4
console.log(veggies.concat(marks)) //array concatination
console.log(veggies.unshift("yogesh"))
console.log(veggies.slice(1,3)) //slicing
console.log(veggies.splice(1,1)) //(index,delete,addeding)
*/
let com=["Bloomberg","microsoft","uber","google","ibm","netflix"]
// console.log(com.shift())
// console.log(com)
console.log(com.splice(2,1,"ola"))
com.push("Amazon")
console.log(com)


