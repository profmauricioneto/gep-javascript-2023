const prompt = require('prompt-sync')();

var valor = prompt('Digite um valor inteiro:');

if(valor >= 0) {
    console.log(`${valor}: sinal +`);
} else {
    console.log(`${valor}: sinal -`);
}