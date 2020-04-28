const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");

// express
const app = express();

// rotas
app.use(bodyParser.json());
app.use(routes);

module.exports = app;
