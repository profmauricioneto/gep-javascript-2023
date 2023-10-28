// Você tem um array de números inteiros. Sua tarefa é criar uma
// função em JavaScript chamada encontrarMaiorValor que
// utiliza o método reduce() para encontrar o maior valor no array.

function encontrarMaiorValor(valores) {
    let valorMaior = valores.reduce((acumulador, valorAtual) => {
        return (acumulador > valorAtual) ? acumulador : valorAtual;
    });

    return valorMaior;
};

const valores = [4,6,2,5,8,9,45,9,4,3,5,23];

let maiorValor = encontrarMaiorValor(valores);
console.log(maiorValor);