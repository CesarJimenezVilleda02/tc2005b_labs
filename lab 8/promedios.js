// CALCULO DE PROMEDIO DE UN ARREGLO
const promedio = (arr) => arr.reduce((curr, num) => curr + num,0) / arr.length;

const test1 = [1,2,3,7,19,26];
const test2 = [5,10,75,38,56,12,10];
const test3 = [71,85,96,45,65,32];

console.log(test1, ' el promedio es: ', promedio(test1));
console.log(test2, ' el promedio es: ', promedio(test2));
console.log(test3, ' el promedio es: ', promedio(test3));
