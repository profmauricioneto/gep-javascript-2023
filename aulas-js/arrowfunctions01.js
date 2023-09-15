let greetings = (name) => console.log(`Hello Mr(s). ${name.toUpperCase()}`);
greetings("Maurício");

let ilimitedSum = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    };
    return sum;
};

console.log(ilimitedSum(1,2,3,4,5,6));
console.log(ilimitedSum(1,2,3,4));

const numbers = [1,2,3,4,5];
const dobro = (numbers) => {
    let newvalues = [];
    for(let i = 0; i < numbers.length; i++) {
        newvalues.push(numbers[i] * 2);
    }
    return newvalues;
};

console.log(dobro(numbers));