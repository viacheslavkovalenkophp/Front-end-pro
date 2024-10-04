function multiNumbers (first) {
    return function (second) {
        return first * second;
    }
}
console.log(multiNumbers(5)(2));