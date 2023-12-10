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

app.post('/calcular-preco-venda', (req, res) => {
  const precoUnitario = parseFloat(req.body.precoUnitario);
  const quantidadeVendida = parseInt(req.body.quantidadeVendida);
  const desconto = parseFloat(req.body.desconto);

  // Cálculo do preço de venda
  const precoVenda = (precoUnitario * quantidadeVendida) - desconto;

  // Exibir o resultado na página
  res.render('price', {precoVenda})
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});