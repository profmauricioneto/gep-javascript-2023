// Você está desenvolvendo um aplicativo de previsão do tempo que precisa buscar
// informações meteorológicas de um serviço de terceiros de forma assíncrona. Para
// isso, você decidiu utilizar Promises em JavaScript para garantir um código mais limpo
// e organizado.
// Você tem uma função buscarPrevisaoDoTempo que aceita o nome de uma cidade
// como argumento e deve retornar a previsão do tempo para essa cidade. No entanto,
// essa função depende de uma chamada assíncrona a um serviço externo e pode levar
// algum tempo para obter os dados.
// Sua tarefa é implementar a função buscarPrevisaoDoTempo usando Promises.
// Você deve retornar uma Promise que resolve com os dados da previsão do tempo ou
// rejeita com uma mensagem de erro se houver algum problema com a chamada ao
// serviço.
// Além disso, encadeie duas chamadas à função buscarPrevisaoDoTempo para as
// cidades "São Paulo" e "Rio de Janeiro". Quando ambas as Promises forem resolvidas,
// exiba as previsões do tempo para essas cidades.
// Lembre-se de lidar com qualquer erro que possa ocorrer durante a chamada ao serviço
// de previsão do tempo.

function buscarPrevisaoDoTempo(cidade) {
    return new Promise((resolve, reject) => {
        const previsao = APIprevisao(cidade);
        if (previsao) {
            resolve(`Previsão para ${cidade}: ${previsao}`);
        } else {
            reject(`Previsao nao encontrada para ${cidade}`);
        }
    });
}

const APIprevisao = (cidade) => {
    const previsao = {
        "São Paulo": "Chuva!",
        "Rio de Janeiro": "Sol Pra Caramba!",
        "Ceara": "Quente mah!",
        "Bahia": "Devagar, devagarinho!",
        "Brasilia": "Seco!"
    };
    return previsao[cidade];
}

const promiseCeara = buscarPrevisaoDoTempo("Ceara");
const promiseBrasilia = buscarPrevisaoDoTempo("Brasilia");
// const promisePiaui = buscarPrevisaoDoTempo("Piaui");

Promise.all([promiseCeara, promiseBrasilia]) 
    .then((resultados) => {
        console.log(resultados[0]);
        console.log(resultados[1]);
        // console.log(resultados[2]);
    })
    .catch((erro) => {
        console.log(`Error: ${erro}`);
    })
    .finally(() => {
        console.log("Fim!");
    }); 