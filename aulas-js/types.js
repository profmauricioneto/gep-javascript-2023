'use strict';
var teste = "Hello World!";
var a = 45.5;
console.log(typeof teste);
console.log(typeof a);
var b;
console.log(typeof b);
b = null;
console.log(typeof b);
var isValid = true;
console.log(typeof isValid);
let valor = 10;

{
    console.log(valor);
    let myname = "Mauricio";
}
// console.log(myname);

for(var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("ultimo valor da variável i: " + i);
console.log(1/0);

var curso = "Grupo de Estudos e Pesquisa sobre JavaScript";
console.log(`Olá você esta no ${curso}`);
var value1 = 30;
var value2 = 33;
console.log(`A soma de 
${value1} e ${value2}
= ${value1 + value2}`);