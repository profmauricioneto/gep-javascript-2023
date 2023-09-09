function multiply(...args) {
  if (args.length === 0) { 
    return "Nenhum argumento foi passado!";
  } else {
    let total = 1;
    for (let i = 0; i < args.length; i++) {
      total *= args[i];
    }
    return total;
  }
}

console.log(multiply(1, 3, 4, 5));
console.log(multiply(1, 3, 4, 5, 3, 4, 5, 6));
console.log(multiply());
