class Calculator {

    #numberOne;
    #numberTwo;

    constructor(numberOne, numberTwo) {
        this.#numberOne = numberOne;
        this.#numberTwo = numberTwo;
    }


    add (numberOne, numberTwo) {
        return numberOne + numberTwo;
    }

    subtract (numberOne, numberTwo) {
        return numberOne - numberTwo;
    }

    multiply (numberOne, numberTwo) {
        return numberOne * numberTwo;
    }

    divide (numberOne, numberTwo) {
        return numberOne / numberTwo;
    }
}

const calc = new Calculator();

console.log (calc.add(5,3));
console.log (calc.subtract(10,4));
console.log (calc.multiply(3,6));
console.log (calc.divide(8,2));
