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
    let id;
    do{
        option = todolistoperations.menu();
        switch (option) {
            case 1:
                todolistoperations.userRegister();
                break;
            case 2:
                id = Number(prompt("Digite o ID do usuário: "));
                todolistoperations.addTask(id);
                break;
            case 3:
                id = Number(prompt("Digite o ID do usuário: "));
                index = Number(prompt("Digite o índice da tarefa: "));
                todolistoperations.deleteTask(id, index);
                break;
            case 4:
                todolistoperations.listUsers();
                break;
            case 5:
                id = Number(prompt("Digite o ID do usuário: "));
                todolistoperations.showTasks(id);
                break;
            case 6: 
                id = Number(prompt("Digite o ID do usuário: "));
                index = Number(prompt("Digite o índice da tarefa: "));
                todolistoperations.updateTask(id, index);
                break;
            case 7: 
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida!");
                break;
        }
    } while(option != 7);
}

main();