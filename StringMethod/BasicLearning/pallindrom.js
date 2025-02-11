function pCheck(num){
    let numString = num.toString()
    let result = numString.split('').reverse().join('')
    return result === numString
}

console.log("no is palindrom", pCheck(1221))