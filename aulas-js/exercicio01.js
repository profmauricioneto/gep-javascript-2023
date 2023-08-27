'use strict';
const prompt = require('prompt-sync')();
const fullname = prompt('Write your fullname: ');
console.log(`Hello ${fullname.toUpperCase()}`);