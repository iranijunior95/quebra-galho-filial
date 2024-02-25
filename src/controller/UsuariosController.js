const bcrypt = require('bcrypt');

const usuariosModel = require('../model/UsuariosModel');

const inserirUsuario = async (req, res) => {

    const { usuario, senha, nivel_acesso} = req.body;

    const validaUsuarioJaCadastrado = await validarSeJaExisteUsuarioCadastrado(req.body);

    if(validaUsuarioJaCadastrado.status) {

        const dados = {
            usuario:usuario,
            senha: await gerarHashSenha(senha),
            nivel_acesso: nivel_acesso
        };

        const inserirUsuario = await usuariosModel.inserirUsuarios(dados);

        if(inserirUsuario.length === 0) {
            return res.status(400).json({
                status: false,
                mensagem: 'erro! prolema em cadastrar usuario',
                dados: []
            });
        }

        return res.status(200).json({
            status: true,
            mensagem: 'ok',
            dados: inserirUsuario
        });

    }

    return res.status(400).json(validaUsuarioJaCadastrado);
};

const validarSeJaExisteUsuarioCadastrado = async (body) => {
    
    const dadosUsuario = await usuariosModel.getNomeUsuario(body.usuario);

    if(dadosUsuario.length === 0) {
        
        return {
            status: true,
            mensagem: 'ok',
            dados: dadosUsuario
        };
    }

    return { 
        status: false,
        mensagem: 'Erro: usuario já cadastrado no sistema',
        dados: body
    };
};

const gerarHashSenha = async (senha) => {

    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);

    return senhaHash;
};

module.exports = {
    inserirUsuario
};