let str = ["hello world"];
let arr = ['l', 'd'];

let strr = str.join("");

function eraseFromStr(strr, arr) {
    let result = "";

    for (let i = 0; i < strr.length; i++) {
        if (!arr.includes(strr[i])) {
            result += strr[i];
        }
    }

    return result;
}
strr = eraseFromStr(strr, arr);
console.log(strr);
