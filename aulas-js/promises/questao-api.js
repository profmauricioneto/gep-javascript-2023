/** Você precisa fazer três solicitações de API sequencialmente e garantir
    que a segunda solicitação seja feita apenas após a conclusão da
    primeira, e a terceira após a segunda. Use Promises para criar uma
    cadeia de promessas que atenda a essa sequência.
    
    A primeira solicitação (API1) deve obter informações de um recurso.

    A segunda solicitação (API2) deve processar as informações obtidas
    da API1 e realizar outra solicitação.
    
    A terceira solicitação (API3) deve processar as informações obtidas
    da API2 e exibir o resultado.
*/

"use strict";
// Simulando a API 1
function executeFirstAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = "Data from API 01";
      console.log("API01 resolved");
      resolve(resultado);
    }, 2000);
  });
}

// Simulando a API 2 com base nos dados da API 1
function executeSecondAPI(API01_data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = `Processed data from API 01: ${API01_data}, and
    the new data from API 02`;
      console.log("API02 resolved");
      resolve(resultado);
    }, 2000);
  });
}

// Simulando a API 3 com base nos dados da API 2
function executeThridAPI(AP02_data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = `Processed data from API 02: ${AP02_data}, and the new data from API 03`;
      console.log("API03 resolved");
      resolve(resultado);
    }, 2000);
  });
}

// Iniciar a cadeia de promessas
executeFirstAPI()
  .then((API01_data) => executeSecondAPI(API01_data))
  .then((AP02_data) => executeThridAPI(AP02_data))
  .then((resultadoFinal) => {
    console.log("Final Result:", resultadoFinal);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
