let userNumber = +prompt ("Enter number")


let num = Math.sqrt(userNumber);
let sum = Math.floor(num);


for(let i = 1; i <= userNumber; i++){
    if(num === sum ){
        console.log("Ok")
    } else {
        console.log("No")
    }
}