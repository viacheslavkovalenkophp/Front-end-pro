let number = + prompt ("Enter Number")

function superNumber () {

    for(let i = 0; i < 10 ; i ++) {
    if (number <= 100) {
        console.log("OK");
    } else if (number > 100) {
        break ;
    } else if (isNaN(number)) {
        console.log("Enter number one more time");
    } else {
        console.log("?");
    }
}
}

superNumber();