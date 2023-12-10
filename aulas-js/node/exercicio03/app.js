const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/apolice', (req, res) => {
  const {
    nome,
    sexo,
    anoNascimento,
    marca,
    modelo,
    anoFabricacao,
    valorVeiculo,
    percentualBonus
  } = req.body;

  // Realizar as validações
  const errors = [];

  if (!['M', 'F'].includes(sexo)) {
    errors.push('Sexo deve ser M (Masculino) ou F (Feminino).');
  }

  const anoNascimentoInt = parseInt(anoNascimento);
  if (anoNascimentoInt < 1901 || anoNascimentoInt > 2001 || isNaN(anoNascimentoInt)) {
    errors.push('Ano de nascimento deve estar entre 1901 e 2001.');
  }

  const anoFabricacaoInt = parseInt(anoFabricacao);
  if (!Number.isInteger(anoFabricacaoInt) || anoFabricacaoInt <= 0) {
    errors.push('Ano de fabricação deve ser um valor inteiro positivo.');
  }

  const valorVeiculoFloat = parseFloat(valorVeiculo);
  if (isNaN(valorVeiculoFloat) || valorVeiculoFloat <= 0) {
    errors.push('Valor do veículo deve ser um número real positivo.');
  }

  const percentualBonusFloat = parseFloat(percentualBonus);
  if (isNaN(percentualBonusFloat) || percentualBonusFloat < 0 || percentualBonusFloat > 25) {
    errors.push('Porcentagem do bônus deve ser um número real entre 0 e 25.');
  }

  // Se houver erros, exibí-los, senão, realizar o cálculo da apólice
  if (errors.length > 0) {
    res.send(errors.join('<br>'));
  } else {
    // Realizar o cálculo da apólice aqui (pode ser adicionado conforme necessário)
    message = '';
    if (sexo === 'M') {
        message = `Sr. ${nome}`
    } else {
        message = `Sra. ${nome}`
    }
    res.render('apolice', {message});
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});