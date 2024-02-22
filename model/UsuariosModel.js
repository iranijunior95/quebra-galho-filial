const connection = require('./connection');

const getNomeUsuario = async (usuario) => {
    try {
        const query = await connection.execute(`SELECT * FROM usuarios WHERE nome_usuarios = '${usuario}' AND status_usuario = 'ativo'`);

        return query[0];

    } catch (error) {
        
        console.log('erro banco de dados: '+error);
        return [];
    }
};

module.exports = {
    getNomeUsuario
};