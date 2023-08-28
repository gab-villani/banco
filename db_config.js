const { Client } = require('pg');

// Função para criar uma conexão ao banco de dados
function criarConexaoBanco1() {
    return new Client({
        host: 'spi100.cdcjipwwwpmn.us-east-1.rds.amazonaws.com',
        user: 'postgres',
        password: 'Engaws3016',
        database: 'dbSpi100',
        port: 5432
    });
}

module.exports = {
    criarConexaoBanco1
};
