/**
 * Um sistema precisa processar uma lista de números inteiros e aplicar
operações matemáticas a eles. Crie uma função em JavaScript que recebe
um array de números e duas funções de callback: uma para calcular o dobro
dos números e outra para calcular o quadrado dos números. A função deve
retornar um novo array contendo os resultados das operações de acordo com
os callbacks fornecidos.
    - Implemente a função processarNumeros(lista, callbackDobro,
    callbackQuadrado) que recebe um array de números, uma função de
    callback callbackDobro e uma função de callback callbackQuadrado. A
    função deve aplicar cada callback a cada número do array e retornar um
    novo array com os resultados.
*/

function main() {
  //
  const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let newlist = processarNumeros(lista, callbackDobro, callbackQuadrado);
  console.log(newlist);
}

function processarNumeros(lista, callbackDobro, callbackQuadrado) {
  if (typeof callbackDobro == "function" || typeof callbackQuadrado == "function" ) {
    // criando objetos com os resultados
    let newValues = lista.map(function (value) {
      const resultadoDobro = callbackDobro(value);
      const resultadoQuadrado = callbackQuadrado(value);

      return {
        numero: value,
        dobro: resultadoDobro,
        quadrado: resultadoQuadrado,
      };
    });
    return newValues;
  } else {
    throw new Error("Os parâmetros devem ser funções callbacks.");
  }
}

function callbackDobro(numero) {
  return numero * 2;
}

function callbackQuadrado(numero) {
  return numero ** 2;
}

main();
