const prompt = require('prompt-sync')();

const fullname = prompt('Write your fullname: ');

firstname = fullname.split(' ')[0];
lastname = fullname.split(' ')[1];
lastname2 = fullname.split(' ')[2];

console.log(`Hello Mr(s) ${lastname.toUpperCase()} ${lastname2.toUpperCase()}, ${firstname.toUpperCase()}`);