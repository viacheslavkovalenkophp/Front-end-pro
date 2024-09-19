let numberOne = +prompt("Enter tour first number");
let numberTwo = +prompt("Enter your second number");
let result = (numberOne + numberTwo) / 2;

if (numberOne + numberTwo === numberTwo + numberOne)
    console.log(result);
else console.log("ERROR");

alert("arithmeticmean is " + result);


let firstNumber = +prompt("Enter tour first number");
let secondNumber = +prompt("Enter tour second number");
let resultIs = ((firstNumber + secondNumber) / 2);
function add(firstNumber, secondNumber) {
    console.log((firstNumber + secondNumber) / 2);
}
add(firstNumber, secondNumber);
alert(resultIs);