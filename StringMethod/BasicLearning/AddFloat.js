let val= parseFloat(2.3)+ parseFloat(2.23)
console.log("2.3 + 2.23 :", val)

function abc(){
    console.log("2.3 + 2.23: ",+ (parseFloat(2.3)+ parseFloat(2.23)).toFixed(2)) 
}
return abc()


//Use of toFixed(): To fix the decimal value, we have to pass the number to the function. till that number it will print the decimal value.
//Use of parseFloat(): To convert a string to float, it takes only one parameter