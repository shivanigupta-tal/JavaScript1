function lastDigit(num1, num2){
    let lastdigit1 = num1- Math.floor(num1/10)*10
    let lastdigit2 = num2- Math.floor(num2/10)*10
    return lastdigit1 === lastdigit2
}
let num1 = 23456
let num2 = 53786
console.log(lastDigit(num1,num2))