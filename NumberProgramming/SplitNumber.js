// let x=12345              Using modulo operator and unshift method
// let digit =[]
// while(x>0){

//   digit.unshift(x%10)
//   x = Math.floor(x/10)
  
// }
// console.log(digit)


//By converting a number to string

// let number = 12345
// let digit = number.toString().split("")
// console.log(digit)


// iteration
let str = "12345"
let arr =[]
for(let i=0; i<=str.length-1; i++){
    arr.push(str.charAt(i))
}
    console.log(arr)
