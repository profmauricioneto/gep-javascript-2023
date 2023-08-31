const prompt = require("prompt-sync")();

var peso = prompt("Digite o seu peso: ");
var altura = prompt("Digite a sua altura: ");
var genero = prompt("Digite o seu gênero: ");

var imc = peso / (altura * altura);
console.log(`O seu IMC é : ${imc.toFixed(2)}`);

var pesoIdeal = -1;
switch(genero.toLowerCase()) {
    case "masculino":
        pesoIdeal = 72.7 * altura - 58;
        break;
    case "feminino":
        pesoIdeal = 62.1 * altura - 44.7;
        break;
    default:
        console.log('Gênero inválido');
}
console.log(`O seu peso ideal é: ${pesoIdeal.toFixed(2)}`);