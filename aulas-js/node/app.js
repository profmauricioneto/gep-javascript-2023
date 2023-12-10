const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World!",
//   });
// });

app.get("/", (req, res) => {
  fs.readFile("index.html", function (error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data, "utf-8");
    res.end();
  });
});
