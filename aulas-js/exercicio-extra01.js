const prompt = require('prompt-sync')();

const fullname = prompt('Write your fullname: ');

firstname = fullname.split(' ')[0];
lastname = fullname.split(' ')[1];

console.log(`Hello Mr(s) ${lastname.toUpperCase()}, ${firstname.toUpperCase()}`);