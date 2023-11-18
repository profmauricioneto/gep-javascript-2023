const languages = ["javascript", "java", "c", "rust", "php"];

const [lang1, lang2, ...rest] = languages;

console.log(lang1);
console.log(lang2);
console.log(rest.length);

const [login = "unknown", password = "unknown"] = ["admin", "123"];
console.log(login);
console.log(password);

const product = {
    description: "Notebook",
    price: 1500,
    quantity: 4
};

let {description, quantity, price} = product;
console.log(`${description} - ${quantity} - ${price}`);

let student = {
    name: "John",
    age: 23
};

let {name = "unknown", age = 0, register = "unknown", course = "undefined"} = student;
console.log(`${name} - ${age} - ${register} - ${course}`);


