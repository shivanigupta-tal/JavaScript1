/*function factorial(n){
    let res =1 
    for(let i=1; i<=n; i++){
      res = res*i
    }
      return res
    }
console.log(factorial(5))
*/


//Using while loop

function fact(n){
    let res =1
    while(n>1){
        res =n*res
        n--
  }  
  return res   
}
console.log(fact(3))

