const prompt = require("prompt-sync")();
let notas = [];

function main() {
    let option;
    do{
        let nota = Number(prompt("Digite uma nota: "));
        notas.push(nota);
        option = prompt("Deseja add mais uma nota? [s/n] ");
    } while(option == 's');
    let media = calcularMedia(notas);
    console.log(`A média das notas é ${media}`);
};

let calcularMedia = (notas) => {
    let soma = 0;
    for(let i = 0; i < notas.length; i++){
        soma = soma + notas[i];
    }
        // for(let item in notas) {
        //     soma+=notas[item];
        // }
    return soma / notas.length;
};

main();