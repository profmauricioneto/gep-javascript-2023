const prompt = require("prompt-sync")();

var senha = prompt("Digite a senha: ");

if (senha.toLowerCase() == "mau123") {
    console.log("Acesso Liberado!");
} else if (senha.toLowerCase() == "admin") {
    console.log("Acesso com privilégios de administrador!");
} else {
    console.log("Acesso Negado");
}