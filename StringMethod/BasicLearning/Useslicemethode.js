function lastDigit(num1, num2){

let a = num1.toString().slice(-1) //-1 indicated the last digit
let b = num2.toString().slice(-1) 
return a == b
}
let num1 = 9876
let num2 = 573987

console.log(lastDigit(num1,num2))