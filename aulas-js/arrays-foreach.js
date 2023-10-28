let soma = 0;

valores = [1,2,3,4,5,6,7,8,9];

valores.forEach(somar);

function somar(item) {
    soma += item;
};

console.log(soma);

letras = ['a', 'b', 'c', 'd'];
letras.forEach(element => {
    console.log(element);
});

// Exercício
// Você está desenvolvendo um sistema de
// gerenciamento de membros de uma equipe. Crie um
// programa em JavaScript que recebe um array de
// nomes e exibe cada nome seguido pelo seu
// respectivo número de caracteres. Implemente a
// função listarNomesECaracteres(nomes) que recebe
// um array de nomes como parâmetro e utiliza o método
// forEach para exibir cada nome e seu número de
// caracteres.

const nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

nomes.forEach(nome => {
    console.log(`${nome} - quantidade de caracteres: ${nome.length}`);
});