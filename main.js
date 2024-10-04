function createSum () {
    let sum = 0;
    return function (num) {
        return sum = sum + num  ;

    }

}

const sum = createSum();

console.log(sum(3));
console.log(sum(3));
console.log(sum(11));


