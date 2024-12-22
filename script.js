import {add,p,m} from "./mathFunctions.js";
import {forest, dWLN} from "./forest.js";
import {logg} from "./logger.js";
import {adds} from "./addingFunctions.js";
import builder from "./logger.js";
import * as num from "./lobby.js";
import * as go from "./logger.js";
add();
logg();
forest();
adds(4,5,6);
builder(1,2,3,4);
dWLN(100,2);
p(10,10);
m(200,50);
num.one(2,2);
num.two(2,2);
num.t(4,4);
num.f(6,8);


const start = go.API_URL;
console.log(start);


// Экспортируем переменную и функции
import * as numm from "./lobby.js";

// Деструктурируем всё, включая переменные и разные функции
const { variable, arrowFunc, regularFunc, obj } = numm;

// Используем переменную и функции
console.log(variable);  // Выводит: 42
arrowFunc();            // Выводит: Arrow Function
regularFunc();          // Выводит: Regular Function
obj.methodFunc();       // Выводит: Method Function in Object


