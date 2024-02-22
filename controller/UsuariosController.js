const usuariosModel = require('../model/UsuariosModel');

const logar = async (req, res) => {
    try {
        const query = await usuariosModel.getUsuarioSenha(req.body.usuario);

        if(query.length === 0) {
            return res.status(200).json({ status: false, mensagem: 'usuario incorreto' });
        }else {
            return res.status(200).json({ status: true, mensagem: 'ok', dados: query });
        }
        
    }catch (error){
        return res.status(500).json({status: false, mensagem: error});
    }
};

module.exports = {
    logar
};