const prompt = require("prompt-sync")();

var termos = prompt("Digite a quantidade de termos da H(n): ");

var serieHarmonica = 0;
for(var i = 1; i <= termos; i++) {
    serieHarmonica += 1/i;
}
console.log(`H(${termos}) = ${serieHarmonica.toFixed(2)}`);