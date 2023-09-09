function sum(a, b) {
    const total = a + b;
    return total;
}
// console.log(total);
console.log(`A soma de 5 + 3 = ${sum(5, 3)}`);

{
    const testeLocal = 'Isso é um teste de variável local!';
    console.log(testeLocal);
}
// console.log(teste);

const testeGlobal = 'Isso é um teste de variável global!';
function printMessageGlobal() {
    console.log(testeGlobal);
}
printMessageGlobal();
console.log(testeGlobal);

function teste() {
    const isTrue = true;
    if(isTrue) {
        let msg = 'Isso é um teste de variável local!';
    }
    console.log(msg);
}
teste();