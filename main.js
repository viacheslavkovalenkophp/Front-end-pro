let numberOne = +prompt("Enter tour first number");
let numberTwo = +prompt("Enter your second number");
let result = (numberOne + numberTwo) / 2;

if (numberOne + numberTwo === numberTwo + numberOne)
    console.log(result);
else console.log("ERROR");

alert("arithmeticmean is " + result);

