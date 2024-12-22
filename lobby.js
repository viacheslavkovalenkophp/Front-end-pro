function one (a,b) {
    console.log(a+b);
}

function two (a,b) {
    console.log(a+b);
}

function three (a,b) {
    console.log(a+b);
}

function four (a,b) {
    console.log(a+b);
}

export {one,two,three as t, four as f}

export const variable = 42;

export const arrowFunc = () => console.log("Arrow Function");
export function regularFunc() {
    console.log("Regular Function");
}
export const obj = {
    methodFunc() {
        console.log("Method Function in Object");
    },
};
