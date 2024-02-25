const usuariosModel = require('../model/UsuariosModel');
const jsonWebToken = require('jsonwebtoken');

const logar = async (req, res) => {
    
    const { usuario, senha } = req.body;
    
};

//Gerar Token
const gerarTokenDeAcesso = async (id, usuario) => {

    const token = await jsonWebToken.sign({
        id: id,
        usuario: usuario
    }, 'M1nh@S3Nh@T0K3n');

    return token;
};

module.exports = {
    logar
};