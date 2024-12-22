export function add() {
    console.log(34);
}

function plus (a,b) {
    console.log(a+b);
}

function minus (a,b) {
    console.log(a-b);
}

export {
    plus as p,
    minus as m
}