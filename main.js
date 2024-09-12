let age = prompt("Enter your year of birth");
console.log(2024 - age);


let city = prompt("Enter your city, town");
let kyivcity = city;
let londoncity = city;
let washingtoncity = city;

if (kyivcity === "Київ") {
    console.log("Ви живете у столиці України");
} else if(londoncity === "Лондон") {
    console.log("Ви живете у столиці Аенглії");
} else if(washingtoncity === "Вашингтон") {
    console.log("Ви живете у столиці сполучених штатів");
} else {
    console.log("Шкода шо Ви не схотіли вводити своє місто")
}

let sport = prompt ("enter your favorite kind of sport");


let beathlon = sport;
let box = sport;
let billiard = sport;

if (beathlon === "Біатлон") {
    console.log("Круто! Хочеш стати як Себастьян Самуэльссон?");
} else if (box === "Бокс") {
    console.log("Круто! Хочеш стати як Майк Тайсон?");
} else if (billiard === "Білліард") {
    console.log("Круто! Хочеш стати як Касперс Пулаускас?")
} else {
    console.log("Шкода шо Ви не схотіли вводити свій улюблений вид спорту")
}
