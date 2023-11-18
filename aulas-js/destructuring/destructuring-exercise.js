/**
 * Uma empresa está coletando dados dos seus funcionários
    para gerar relatórios. Crie um programa em JavaScript que
    recebe um array contendo informações de funcionários, onde
    cada informação é um objeto com os campos nome, idade e
    cargo. O programa deve retornar um novo array contendo
    apenas os nomes dos funcionários.
    - Implemente a função obterNomesFuncionarios(funcionarios) que
    recebe um array de informações de funcionários como parâmetro
    e utiliza o operador de desestruturação (destructuring) para criar
    um novo array contendo apenas os nomes dos funcionários.
 * */ 
const prompt = require("prompt-sync")();


let funcionarios = []

function main() {
    do {
        let funcionario = {};
        funcionario.nome = prompt("Nome: ");
        funcionario.idade = prompt("Idade: ");
        funcionario.cargo = prompt("Cargo: ");
        funcionarios.push(funcionario);
        option = prompt("Deseja continuar? (S/N) ");
    }while(option.toLowerCase() != 'n');

    nomes = obterNomesFuncionarios(funcionarios);
    console.log(nomes)
}

function obterNomesFuncionarios(funcionarios) {
    let nomes = [];
    nomes = funcionarios.map(({nome}) => nome)
    return nomes;
}

main();