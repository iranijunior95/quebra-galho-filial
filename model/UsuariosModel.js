const connection = require('./connection');

const getUsuarioSenha = async (usuario) => {
    try {
        const query = await connection.execute(`SELECT * FROM usuarios WHERE nome_usuarios = '${usuario}'`);

        return query[0];

    } catch (error) {
        
        return error;
    }
};

module.exports = {
    getUsuarioSenha
};