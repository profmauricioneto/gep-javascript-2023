// const prompt = require('prompt-sync')();

// with prompt
// const value = prompt('Write a number: ');
// if (value % 2 == 0) {
//     console.log(`${value} is even.`);
// } else {
//     console.log(`${value} is odd.`);
// }

// with array
values = [1,2,3,4,5,6,7,8];
for(var i = 0; i < values.length; i++) {
    if (values[i] % 2 == 0) {
        console.log(`${values[i]} is even.`);
    } else {
        console.log(`${values[i]} is odd.`);
    }
}