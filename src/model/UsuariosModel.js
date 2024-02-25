const connection = require('./connection');

const getNomeUsuario = async (usuario) => {
    try {

        const query = await connection.execute(`SELECT * FROM usuarios WHERE nome_usuarios = '${usuario}' AND status_usuario = 'ativo'`);
        return query[0];

    } catch (error) {
    
        console.log('erro banco de dados: '+error);
        return ['erro'];
    }
};

const inserirUsuarios = async (dados) => {

    const { usuario, senha, nivel_acesso } = dados;
    const query = 'INSERT INTO usuarios(nome_usuarios, senha_usuarios, nivel_acesso, status_usuario) VALUES (?, ?, ?, ?);';

    try {

        const inserirUsuario = await connection.execute(query, [usuario, senha, nivel_acesso, 'ativo']);
        return inserirUsuario[0];

    }catch (error) {
        
        console.log('erro banco de dados: '+error);
        return [];
    }
};

module.exports = {
    getNomeUsuario,
    inserirUsuarios
};