const person = {name: "Mauricio", age: 33};

const greetingPerson = (person) => {
    return `Ola, meu nome é ${person.name} e tenho ${person.age} anos.`;
}

console.log(greetingPerson(person));