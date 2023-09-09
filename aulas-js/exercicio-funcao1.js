const prompt = require('prompt-sync')();

let name = prompt('Digite seu nome: ');

hello(name);

function hello(name) {
    console.log(`Hello, Mr(s): ${name.toUpperCase()}`);
};

var helloUnnamedFunction = function(name) {
    console.log(`Hello in Unnamed Function, Mr(s) ${name.toUpperCase()}`);
}

helloUnnamedFunction(name);