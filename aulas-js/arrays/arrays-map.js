let numbers = [65, 44, 12, 4];

let newarray = numbers.map(myFunction);

function myFunction(num) {
    return num * 10;
}

console.log(newarray);

// Exercício
// Uma estação meteorológica registrou a temperatura em graus
// Celsius ao longo de um dia. Crie um programa em JavaScript que
// recebe um array de temperaturas em graus Celsius e retorna um
// novo array contendo as temperaturas equivalentes em graus
// Fahrenheit.
// - A fórmula para converter de Celsius para Fahrenheit é:
// Fahrenheit = (Celsius * 9/5) + 32.
// - Implemente a função converterCelsiusParaFahrenheit(tempCelsius)
// que recebe um array de temperaturas em graus Celsius como
// parâmetro e utiliza o método map para criar um novo array contendo
// as temperaturas equivalentes em graus Fahrenheit.

const grausCelsius = [33, 22, 28, 40, 39, 50, 32, 35, 37, 30]; 

function converterCelsiusParaFahrenheit(tempCelsius) {
    return grausCelsius.map(temp => temp*(9/5)+32);
}

let tempFahrenheit = converterCelsiusParaFahrenheit(grausCelsius);
console.log(tempFahrenheit);