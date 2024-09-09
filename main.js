let stringNumber = "10369";
let realNumber =+stringNumber;

let fifthNumber = realNumber % 10;
let fourthNumber = Math.floor(realNumber / 10 -1030);
let thirdNumber = Math.round (realNumber / 3000);
let secondNumber = Math.trunc(realNumber / 30000);
let firstNumber = Math.floor(realNumber /10368 % 12 );

console.log(stringNumber);
console.log(realNumber);

console.log(`${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber} ${fifthNumber}`);
