//using math.max() function
//using conditional operator


/*let num1 = 10, num2=30, num3=26
if (num1>num2 && num1>>num3){
    console.log("Max of num1,num2 and num3 is", num1)
}
else if(num2>num1 && num2>num3){
    console.log("Max of num1,num2 and num3 is", num2)
}
else
console.log("Max of num1,num2 and num3 is", num3)
*/

//Using math.max()
/*
let num1=10, num2=200, num3=40 
let x = Math.max(num1,num2,num3)
console.log("Max of three number is:", x)
*/

//using ternary operator

let num1=10, num2=60, num3=32
function maxofThree(num1,num2,num3){                    //using function
    return (num1>=num2 && num1>=num3? num1 : num2>= num1 && num2>= num3 ? num2 : num3)

}
console.log(maxofThree(29,12,78))

//let x = (num1>=num2 && num1>=num3? num1 : num2>= num1 && num2>= num3 ? num2 : num3)
//console.log("Greatest of three no is:", x )
