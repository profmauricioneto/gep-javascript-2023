const prompt = require('prompt-sync')();

var termos = prompt('Digite a quantidade de termos de fibonacci: ');

if (termos < 0) {
    console.log('Não existe sequencia de fibonacci negativa');
} else {
    var a = 0;
    var b = 1;
    var aux = a + b;
    for (var i = 1; i <= termos; i++) {
        console.log(aux);
        a = b;
        b = aux;
        aux = a + b;
    }
}
