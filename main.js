let userNumber = +prompt ("Enter number")


let num = Math.sqrt(userNumber);
let sum = Math.floor(num);


for(let i = 1; i <= userNumber; i++){
    if(num === sum ){
        console.log("це число не є простим")
    } else {
        console.log("це число є простим")
    }
}