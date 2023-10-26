/**
 * @author mauricio.moreira 
 * ? HOW CAN WE IMPROVE THIS CODE ?
 * DONE: 1. Imprimir as tasks antes de deletar (e depois);
 * DONE: 2. Imprimir as tasks de um usuários específico;
 * DONE: 3. Criar uma propriedade ID no cadastro ou algo que seja uma chave única (CPF); 
 * DONE: 4. Criar uma função para alterar o status da task;
 * TODO: (futuramente) - tornar a propriedade status como string (concluída, pendente, em andamento);
 * TODO: Persistencia de dados (arquivo ou banco)
 */
const prompt = require("prompt-sync")();

let registers = [];
let id = 0;

/**
 * @function 
 * @name 
 * @param 
 * @description 
*/
let updateTask = (id, index) => {
  if (!findUser(Number.parseInt(id))) {
    console.log(`Usuário ${id} não encontrado!`);
    return;
  } else {
    registers.forEach((element) => {
      if (Number.parseInt(element.id) === id) {
        console.log(`Versão Antiga: `);
        showTasks(id);
        element.tasks[index].status = false;
        console.log(`Versão Nova: `);
        showTasks(id);
      }
    });
  }
};

/**
 * @function 
 * @name showTasks
 * @param id int
 * @description show all tasks of some element
*/
let showTasks = (id) => {
  registers.forEach((element) => {
    if (element.id === id) {
      element.tasks.forEach((task) => {
        console.log(task);
      });
    }
  });
}

/**
 * @function 
 * @name incrementId
 * @param none
 * @description responsible to increment the id of the user 
*/
let incrementId = () => {
  id++;
  return id;
}

/**
 * @function 
 * @name findUser
 * @param id
 * @description function responsable to find some user in the registers
*/
const findUser = (id) => {
  let signal = false;
  registers.forEach((element) => {
    if (element.id === id) {
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
  console.log("5. Imprimir Tasks de um usuário");
  console.log("6. Atualizar Task");
  console.log("7. Sair");
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
  register.id = incrementId(id);
  register.name = prompt("Digite seu nome: ");
  register.email = prompt("Digite seu email: ");
  register.tasks = [];
  registers.push(register);
};

/**
 * @function 
 * @name addTask
 * @param id int
 * @description function responsable to add a task to a user
*/
var addTask = (id) => {
  if (findUser(Number.parseInt(id))) {
    let task = {};
    task.description = prompt("Digite uma tarefa: ");
    task.status = true;
    registers.forEach((element) => {
      if (Number.parseInt(element.id) === id) {
        console.log(`Versão Antiga: `);
        showTasks(id);
        element.tasks.push(task);
        console.log(`Versão Nova: `);
        showTasks(id);
      }
    });
  } else {
    console.log(`Usuário ${id} não encontrado!`);
  }
};

/**
 * @function 
 * @name deleteTask
 * @param id int
 * @param index int
 * @description function responsable to delete a task 
*/
var deleteTask = (id, index) => {
  if (!findUser(Number.parseInt(id))) {
    console.log(`Usuário ${id} não encontrado!`);
    return;
  } else {
    registers.forEach((element) => {
      if (Number.parseInt(element.id) === id) {
        console.log(`Versão Antiga: `);
        showTasks(id);
        element.tasks.splice(index, 1);
        console.log(`Versão Nova: `);
        showTasks(id);
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
  showTasks,
  updateTask
};
