let number = prompt ("enter some number");
let coast = +number;

let thirdNumber = coast % 10;
let secondNumber = Math.floor (coast /10 % 10);
let firstNumber = Math.floor (coast / 100 % 10);

console.log(thirdNumber);
console.log(secondNumber);
console.log(firstNumber);

if (firstNumber === secondNumber && secondNumber === thirdNumber) {
    console.log("the numbers is same");
} else {
    console.log("the numbers not is same");
}
if (firstNumber === secondNumber && secondNumber--- secondNumber) {
    console.log("yes there are is same numbers");
} else {
    console.log("no there are is same numbers");
}