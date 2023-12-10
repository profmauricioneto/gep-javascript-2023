var fs = require("fs");
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var urlencondedParser = bodyParser.urlencoded({ extended: true });

// creating the server of the application
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log("Server started in port %s", port);
});

// route of root page
app.get("/", function (req, res) {
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

// route of the page that will receive the form
app.post("/form", urlencondedParser, function (req, res) {
  fs.readFile("form.html", function (err, data) {
    var today = new Date();
    var values = {
      name: req.body.name,
      year: req.body.birthYear,
      age: today.getFullYear() - parseInt(req.body.birthYear),
    };
    
    for (var key in values) {
      data = data.toString().replace("{{" + key + "}}", values[key]);
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});
