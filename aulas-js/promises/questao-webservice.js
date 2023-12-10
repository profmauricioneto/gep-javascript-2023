/**
 * Você está desenvolvendo um sistema para buscar informações em dois serviços
    web diferentes. Cada serviço retorna uma promessa com dados distintos. A sua
    tarefa é criar uma função buscarDadosCombinados que utiliza o conceito de
    Promises para buscar dados de ambos os serviços simultaneamente. Implemente
    a função de forma que ela retorne um objeto contendo os dados combinados de
    ambos os serviços.
    Os serviços web estão simulados pelas funções servicoWebA e servicoWebB.
    Ambas recebem um parâmetro id e retornam uma Promise que será resolvida
    com os dados correspondentes ao id. Se os dados não estiverem disponíveis, a
    Promise será rejeitada.
*/

// funcao do servico web A
function servicoWebA(id) {
  return new Promise((resolve, reject) => {
    // Simula uma requisição ao serviço web A
    setTimeout(() => {
      const dados = {
        id,
        dadosA: `Dados do serviço A para ID ${id}`,
      };
      resolve(dados);
    }, 1000); // Simula um tempo de resposta de 1 segundo
  });
}

// funcao do servico web B
function servicoWebB(id) {
  return new Promise((resolve, reject) => {
    // Simula uma requisição ao serviço web B
    setTimeout(() => {
      const dados = {
        id,
        dadosB: `Dados do serviço B para ID ${id}`,
      };
      resolve(dados);
    }, 800); // Simula um tempo de resposta de 800 milissegundos
  });
}

// Sua função a ser implementada
function buscarDadosCombinados(id) {
  // Implemente aqui a lógica para buscar dados combinados dos serviços web A e B
  return Promise.all([servicoWebA(id), servicoWebB(id)])
    .then(([dadosWebServiceA, dadosWebServiceB]) => {
        return {
          dadosA: dadosWebServiceA.dadosA,
          dadosB: dadosWebServiceB.dadosB
        };
    })
    .catch((erro) => {
      console.error('Error ao captar dados dos web service: ', erro);
      throw erro;
    });
}

// Exemplo de uso
const idBusca = 60;
buscarDadosCombinados(idBusca)
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.error(erro));
