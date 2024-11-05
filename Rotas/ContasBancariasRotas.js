const Router = require("express");
const { todasFuncoes } = require("../controladores/conta_bancaria/ListaContaBancariaController");
//importações de controller
const contaBancariaRotas = Router();

module.exports = { contaBancariaRotas }