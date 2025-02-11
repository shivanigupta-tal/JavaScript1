//const num = 23
function checkSign(num){
    switch(Math.sign(num)){
        case 1:
            console.log("+ve")
            break;
            case -1:
               console.log("-ve")
            break;
            default:
                console.log("zero")   

    }
}
 return checkSign(-9)