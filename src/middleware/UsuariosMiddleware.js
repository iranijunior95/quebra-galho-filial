const validarBody = (request, response, next) => {

    const { usuario, senha} = request.body;

    if(!usuario & !senha) {
        return response.status(400).json({
            status: false,
            mensagem: 'Erro: campo usuario e campo senha são obrigatorios!',
            dados: request.body
        });
    }
    
    if(!usuario) {
        return response.status(400).json({
            status: false,
            mensagem: 'Erro: campo usuario é obrigatorio!',
            dados: request.body
        });
    }

    if(!senha) {
        return response.status(400).json({
            status: false,
            mensagem: 'Erro: campo senha é obrigatorio!',
            dados: request.body
        });
    }

    next();
};

module.exports = {
    validarBody
};