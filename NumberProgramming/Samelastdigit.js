
//using modulo operator
/*let x= 20
let y=30
if(x%10 == y%10){
    console.log("both numbers have same last digit")
}
else{
    console.log("not")
}
    */

//By converting number to string

let num1 = 1284
let num2 = 6783

function comapareLastdigit(num1, num2){
    let lastdigit1 = num1.toString().slice(-1)
    let lastdigit2 = num2.toString().slice(-1)
    return lastdigit1 == lastdigit2
    
    }
    console.log("Last digit are same", comapareLastdigit(num1, num2)  )




