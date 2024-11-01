const express = require("express");
const { contaBancariaRotas } = require("./Rotas/ContasBancariasRotas");
const app = express();
app.use(contaBancariaRotas);

app.listen(8000);