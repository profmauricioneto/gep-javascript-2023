const prompt = require("prompt-sync")();
const utils = require("./utils");
const fs = require("fs");

const Status = {
    todo: "TODO",
    doing: "DOING",
    done: "DONE",
};

var registers = {
  table_register: []
};

/**
 * @function 
 * @name addUser
 * @param none
 * @description function responsable to add a new user in the registers
*/
let addUser = (filename) => {
    let date = new Date();
    let register = {};
    register.cpf = prompt("Your CPF: ");
    register.name = prompt("Your name: ");
    register.email = prompt("Your e-mail: ");
    register.timestamp = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    register.tasks = [];
    registers.table_register.push(register);
    utils.updateRegisters(registers, filename);
  };

/**
 * @function 
 * @name showAllUsers
 * @param none
 * @description function responsable to print all users in the system
*/
let readAllUsers = (filename) => {
    fs.readFile("logs/" + filename + ".json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
};

/**
 * @function 
 * @name addNewTask
 * @param cpf int
 * @description function responsable to add a task to a user
*/
let addNewTask = (cpf, filename) => {
    if (findUserByCPF(cpf)) {
      let task = {};
      task.description = prompt("Write a task: ");
      task.status = Status.todo;
      registers.table_register.forEach((element) => {
        if (element.cpf === cpf) {
          console.log(`Old version: `);
          showTasksByCPF(cpf);
          element.tasks.push(task);
          console.log(`New Version: `);
          showTasksByCPF(cpf);
          utils.updateRegisters(registers, filename);
        }
      });
    } else {
      console.log(`User ${cpf} Not Found!`);
    }
  };

/**
 * @function 
 * @name deleteTask
 * @param cpf
 * @param index int
 * @description function responsable to delete a task 
*/
var deleteTask = (cpf, index, filename) => {
    if (!findUserByCPF(cpf)) {
      console.log(`User ${cpf} Not Found!`);
      return;
    } else {
      registers.table_register.forEach((element) => {
        if (element.cpf === cpf) {
          console.log(`Old Version: `);
          showTasksByCPF(cpf);
          element.tasks.splice(index, 1);
          console.log(`New Version: `);
          showTasksByCPF(cpf);
          utils.updateRegisters(registers, filename);
        }
      });
    }
  };

/**
 * @function 
 * @name updateTask
 * @param cpf
 * @param index int
 * @description function responsable to delete a task 
*/
var updateTask = (cpf, status, filename) => {
  if (status !== Status.todo || status !== Status.doing || status !== Status.done) {
    console.log(`Invalid Status!`);
  } else {
    if (!findUserByCPF(cpf)) {
      console.log(`User ${cpf} Not Found!`);
      return;
    } else {
      registers.table_register.forEach((element) => {
        if (element.cpf === cpf) {
          console.log(`Old Version: `);
          showTasksByCPF(cpf);
          element.tasks.status = status;
          console.log(`New Version: `);
          showTasksByCPF(cpf);
          utils.updateRegisters(registers, filename);
        }
      });
    }
  }
};

/**
 * @function 
 * @name findUserByCPF
 * @param 
 * @description function responsable to find some user in the registers
*/
const findUserByCPF = (cpf) => {
  let signal = false;
  registers.table_register.forEach((element) => {
    if (element.cpf === cpf) {
      console.log(`User ${element.name} found!`);
      signal = true;
    }
  });
  return signal;
};

/**
* @function 
* @name showTasksByCPF
* @param 
* @description show all tasks of some element
*/
let showTasksByCPF = (cpf) => {
  registers.table_register.forEach((element) => {
    if (element.cpf === cpf) {
      element.tasks.forEach((task) => {
        console.log(task);
      });
    }
  });
}

/**
 * @description export all functions to another file
*/
module.exports = {
    addUser,
    readAllUsers, 
    addNewTask,
    deleteTask,
    updateTask
}