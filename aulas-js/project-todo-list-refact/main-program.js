/**
 * @author mauricio.moreira
 * @description program of to do list in execution
*/
const prompt = require('prompt-sync')();
const todolist = require('./todo-crud');
const utils = require('./utils');

/**
 * @name main
 * @description main function of to do list
*/
function main() {
    let option;
    let cpf;
    let status;
    let filename = prompt("Enter with filename: ");
    utils.createFile(filename);
    do {
        option = utils.menu();
        switch (option) {
            case 1:
                todolist.addUser(filename);
                break;
            case 2:
                cpf = prompt("Enter with CPF to search: ");
                todolist.addNewTask(cpf, filename);
                break;
            case 3:
                cpf = prompt("Enter with CPF User: ");
                index = Number(prompt("Index of Task: "));
                todolist.deleteTask(cpf, index);
                break;
            case 4:
                todolist.readAllUsers();
                break;
            case 5:
                cpf = prompt("Enter with CPF: ");
                todolist.showTasksByCPF(cpf);
                break;
            case 6:

                cpf = prompt("Enter with CPF: ");
                // index = prompt("Index of Task: ");
                status = prompt("Choice a new status[todo, doing, done]: ");
                status = status.toUpperCase();
                todolist/updateTask(cpf, status);
                break;
            case 7: 
                console.log("Leaving...");
                break;
            default:
                console.log("Invalid Option!");
                break;
        }
    } while(option != 7);
}

main();