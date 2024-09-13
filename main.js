let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(numOrStr) {
    case null:
        console.log("Ви скаували");
        break;
    case ``:
        console.log("Empty string");
        break;
    case isNaN(+numOrStr):
        console.log("number is Ba_NaN");
        break;
    default:
        console.log("OK!")
}