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

let myNumber = +prompt ("Enter number")


let nam = Math.sqrt(myNumber);
let sam = Math.floor(nam);


for(let i = 1; i <= myNumber; i++){
    if(myNumber === sam * sam){
        console.log("це число не є простим")
    } else {
        console.log("це число є простим")
    }
}