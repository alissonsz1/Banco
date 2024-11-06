const { atualizar } = require("./AtualizarUsuariosContaBancaria");
const { saldo } = require("./ConsutarSaldo");
const { criar_conta } = require("./CriarContaBancaria");
const { deposito } = require("./Depositar");
const { excluir } = require("./ExcluirConta");
const { extrato } = require("./Extrato");
const { sacar } = require("./Sacar");
const { teste } = require("./teste");
const { transferir } = require("./Transferir");
const { validade } = require("./Validação");

//coloca todas as funções em um unico objeto e exporta ele logo em seguida.
const todasFuncoes = {
    validade,
    atualizar,
    saldo,
    criar_conta,
    deposito,
    excluir,
    extrato,
    sacar,
    transferir,
    teste
};
module.exports = { todasFuncoes }