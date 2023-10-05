/**
 * @author mauricio.moreira
 * @description program of to do list in execution
*/
const prompt = require('prompt-sync')();
const todolistoperations = require('./todolist');

/**
 * @name main
 * @description main function of to do list
*/
function main() {
    let option;
    let name;
    do{
        option = todolistoperations.menu();
        switch (option) {
            case 1:
                todolistoperations.userRegister();
                break;
            case 2:
                name = prompt("Digite o nome do usuário: ");
                todolistoperations.addTask(name);
                break;
            case 3:
                name = prompt("Digite o nome do usuário: ");
                index = Number(prompt("Digite o índice da tarefa: "));
                todolistoperations.deleteTask(name, index);
                break;
            case 4:
                todolistoperations.listUsers();
                break;
            default:
                console.log("Opção inválida!");
                break;
        }
    } while(option != 5);
}

main();