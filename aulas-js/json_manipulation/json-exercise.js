const funcionario = {
    nome: "Mauricio Neto",
    idade: 33,
    cargo: "Professor",
    salario: 10000
};

const json_funcionario = JSON.stringify(funcionario);
console.log(json_funcionario);
console.log(funcionario);
console.log("JSON: " + typeof json_funcionario);
console.log("Object: " + typeof funcionario);
funcionario2 = JSON.parse(json_funcionario);
console.log("Object 2: ");
console.log(funcionario2);

const json_user = '{"name": "Mauricio", "age": 33, "isProfessor": true, "courses": ["programming 1", "programming 2", "mathematical logic 1"]}';

const user = JSON.parse(json_user);

console.log(user.name);
console.log(user.isProfessor);
console.log(user.courses[2]);