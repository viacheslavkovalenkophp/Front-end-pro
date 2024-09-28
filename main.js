const array = [1, 3, 4, 6, 2, 5, 7];

for(let i =0; i < array.length; i++) {
    if(array[i] === 4) {
       array.splice(i,1);

    }
}
console.log(array);