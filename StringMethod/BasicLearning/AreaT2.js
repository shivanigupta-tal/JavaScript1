let s1 = 10
let s2 = 20
let s3 = 30
let s = (s1+s2+s3)/2

function areaTriangle(s1,s2,s3){
    return Math.sqrt(s* (s-s1)*(s-s2)*(s-s3))
}
console.log("area of triangle:", areaTriangle(s1,s2,s3) )

function add(num1,num2,num3){
    let result = num1+num2+num3
    return result
}
console.log(add(10,30,50))