const usuariosModel = require('../model/UsuariosModel');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');
require('dotenv').config();

const logar = async (req, res) => {
    
    const { usuario, senha } = req.body;
    const validarUser = await validarUsuario(usuario, senha);

    if(validarUser.length === 0) {

        return res.status(400).json({
            status: false,
            mensagem: 'Erro: usuario ou senha incorretos!',
            dados: req.body
        });
    }

    try {
        const token = await jsonWebToken.sign({
            id: validarUser.nome_usuarios,
            usuario: validarUser.senha_usuarios,
            nivel_acesso: validarUser.nivel_acesso
        }, process.env.SECRET);

        return res.status(200).json({
            status: true,
            mensagem: 'OK: Autenticação realizada com sucesso!',
            token: token
        }); 

    }catch(erro) {
        console.log('Erro no servior: '+erro);

        return res.status(500).json({
            status: false,
            mensagem: 'Erro: erro no servidor!',
            dados: req.body
        });
    }
};

const validarUsuario = async (usuario, senha) => {

    const dadosUsuario = await usuariosModel.getNomeUsuario(usuario);

    if(dadosUsuario[0] === 'erro' || dadosUsuario[0] === undefined) {
        
        return [];
    }

    const verificaSenha = await bcrypt.compare(senha, dadosUsuario[0].senha_usuarios);

    if(!verificaSenha) {

        return [];
    }

    return dadosUsuario[0];
};

module.exports = {
    logar
};