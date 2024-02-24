const usuariosModel = require('../model/UsuariosModel');
const jsonWebToken = require('jsonwebtoken');

const logar = async (req, res) => {
    
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    const validacoes = await validaDadosDeEntrada(usuario, senha);

    if(validacoes.status) {

        return res.status(200).json({
            status: true,
            tokenAcesso: await gerarTokenDeAcesso(validacoes.dados[0]['id_usuarios'], validacoes.dados[0]['nome_usuarios'])
        });
    }

    return res.status(400).json(validacoes);
};

//Validações
const validaDadosDeEntrada = async (usuario, senha) => {

    if(!usuario) {
        return { 
            status: false,
            mensagem: 'Campo usuário não pode ser vazio...',
            campo: 'usuario'
        };
    }else if(!senha) {
        return { 
            status: false,
            mensagem: 'Campo senha não pode ser vazio...',
            campo: 'senha'
        };
    }else {

        const dadosUsuario = await usuariosModel.getNomeUsuario(usuario);

        if(dadosUsuario.length === 0) {
            return { 
                status: false,
                mensagem: 'Usuário ou Senha incorretos...'
            };
        }

        return { 
            status: true,
            dados: dadosUsuario
        };
    }
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