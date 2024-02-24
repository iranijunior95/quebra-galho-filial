const usuariosModel = require('../model/UsuariosModel');

const inserirUsuario = async (req, res) => {

    const usuario = req.body.usuario;
    const senha = req.body.senha;
    const nivel_acesso = req.body.nivel_acesso;

    const validaDadosVazios = validarSeDadosEstaoVazios(usuario, senha);

    if(validaDadosVazios.status) {
        
        const validaUsuarioJaCadastrado = await validarSeJaExisteUsuarioCadastrado(usuario);

        if(validaUsuarioJaCadastrado.status){

            return res.status(200).json({
                mensagem: 'ta liberado',
                dados: validaUsuarioJaCadastrado.dados
            });
        }

        return res.status(400).json(validaUsuarioJaCadastrado);

    }else {

        return res.status(400).json(validaDadosVazios);
    }
};

const validarSeDadosEstaoVazios = (usuario, senha) => {

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
        return { 
            status: true,
            mensagem: 'ok'
        };
    }
};

const validarSeJaExisteUsuarioCadastrado = async (usuario) => {
    
    const dadosUsuario = await usuariosModel.getNomeUsuario(usuario);

    if(dadosUsuario.length === 0) {
        
        return {
            status: true,
            dados: dadosUsuario
        };
    }

    return { 
        status: false,
        mensagem: 'Usuário já cadastrado no sistema...'
    };
};

module.exports = {
    inserirUsuario
};