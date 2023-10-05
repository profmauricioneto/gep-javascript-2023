/**
 * @author mauricio.moreira 
 * ? HOW CAN WE IMPROVE THIS CODE ?
 * TODO: 1. Imprimir as tasks antes de deletar (e depois);
 * TODO: 2. Imprimir as tasks de um usuários específico;
 * TODO: 3. Criar uma propriedade ID no cadastro ou algo que seja uma chave única (CPF);
 * TODO: 4. Criar uma função para alterar o status da task;
 * TODO: (futuramente) - tornar a propriedade status como string (concluída, pendente, em andamento);
 * TODO: Persistencia de dados (arquivo ou banco)
 */
const prompt = require("prompt-sync")();

let registers = [];

/**
 * @function 
 * @name findUser
 * @param nameUser
 * @description function responsable to find some user in the registers
*/
const findUser = (nameUser) => {
  let signal = false;
  registers.forEach((element) => {
    if (element.name === nameUser) {
      console.log(`Usuário ${element.name} encontrado!`);
      signal = true;
    }
  });
  return signal;
};

/**
 * @function 
 * @name menu
 * @param none
 * @description function responsable to print the menu after the execution
*/
const menu = () => {
  console.log("=============================");
  console.log("1. Cadastrar Usuário");
  console.log("2. Add Tarefa");
  console.log("3. Deletar Tarefa");
  console.log("4. Listar Usuarios");
  console.log("5. Sair");
  console.log("=============================");
  let option = Number(prompt("Digite uma opção: "));
  return option;
};

/**
 * @function 
 * @name userRegister
 * @param none
 * @description function responsable to add a new user in the registers
*/
var userRegister = () => {
  let register = {};
  register.name = prompt("Digite seu nome: ");
  register.email = prompt("Digite seu email: ");
  register.tasks = [];
  registers.push(register);
};

/**
 * @function 
 * @name addTask
 * @param nameUser
 * @description function responsable to add a task to a user
*/
var addTask = (nameUser) => {
  if (findUser(nameUser)) {
    let task = {};
    task.description = prompt("Digite uma tarefa: ");
    task.status = true;
    registers.forEach((element) => {
      if (element.name === nameUser) {
        element.tasks.push(task);
      }
    });
  } else {
    console.log(`Usuário ${nameUser} não encontrado!}`);
  }
};

/**
 * @function 
 * @name deleteTask
 * @param nameUser string
 * @param index int
 * @description function responsable to delete a task 
*/
var deleteTask = (nameUser, index) => {
  if (!findUser(nameUser)) {
    console.log(`Usuário ${nameUser} não encontrado!}`);
    return;
  } else {
    registers.forEach((element) => {
      if (element.name === nameUser) {
        element.tasks.splice(index, 1);
      }
    });
  }
};

/**
 * @function 
 * @name listUsers
 * @param none
 * @description function responsable to print all users in the system
*/
var listUsers = () => {
  registers.forEach((element) => {
    console.log(element);
  });
};

/**
 * @description export all functions to another file
*/
module.exports = {
  menu,
  userRegister,
  addTask,
  listUsers,
  deleteTask,
};
