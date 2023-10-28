const valores = [1,2,3,4,5,6,7,8,9];

let isBiggerThanFive = (value) => {
    return value > 5;
};

let numbersBiggerThenFive = valores.filter(isBiggerThanFive);
console.log(numbersBiggerThenFive);

// Exercício
// Considere um conjunto de números inteiros. Crie um
// programa em JavaScript que recebe um array de
// números inteiros e retorna um novo array contendo
// apenas os números pares. Implemente a função
// selecionarNumerosPares(numeros) que recebe um array
// de números inteiros como parâmetro e utiliza o método
// filter para criar um novo array contendo apenas os
// números pares.

const numeros = [1,2,3,4,5,6,7,8,9,10];

function selecionarNumberosPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
}

console.log(selecionarNumberosPares(numeros));
