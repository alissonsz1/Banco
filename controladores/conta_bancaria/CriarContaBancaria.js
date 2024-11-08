const { bancoDeDados } = require("../../dados/bancoDeDados");

function criar_conta (req, res){
    const usuario = req.body;

    if(!usuario.nome ||!usuario.email ||!usuario.cpf ||!usuario.data_nascimento ||!usuario.telefone ||!usuario.senha){
        return res.status(400).json({ mensagem: 'Mensagem de erro' });
    }

    const conta = {}
    const saldo = 0;
    const numerosExistentes = bancoDeDados.contas.map(conta => parseInt(conta.numero));
    let numeroDisponivel = 1;

    while (numerosExistentes.includes(numeroDisponivel)) {
        numeroDisponivel++;
    }

    conta.numero = numeroDisponivel.toString();
    conta.saldo = saldo;
    conta.usuario = usuario;

    bancoDeDados.contas.push(conta)

    console.log(bancoDeDados.contas)


}

module.exports = { criar_conta }