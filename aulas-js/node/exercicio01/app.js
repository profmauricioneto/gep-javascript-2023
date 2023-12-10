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

app.post('/media', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const num3 = parseFloat(req.body.num3);
  const num4 = parseFloat(req.body.num4);

  const media = (num1 + num2 + num3 + num4) / 4;

  res.render('resultado', { media })
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
