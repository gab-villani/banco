import { Client, ClientConfig } from 'pg';

// Tipo para a configuração da conexão
interface ConnectionConfig extends ClientConfig {}

// Função para criar uma conexão ao banco de dados
function criarConexaoBanco1(): Client {
    const config: ConnectionConfig = {
        host: 'spi100.cdcjipwwwpmn.us-east-1.rds.amazonaws.com',
        user: 'postgres',
        password: 'Engaws3016',
        database: 'dbSpi100',
        port: 5432
    };

    return new Client(config);
}

function criarConexaoBanco2(): Client {
    const config: ConnectionConfig = {
        host: '54.207.19.84',
        user: 'dev_eng',
        password: 'Eng.3016',
        database: 'db_spi_200',
        port: 5432
    };

    return new Client(config);
}

export {
    criarConexaoBanco1,
    criarConexaoBanco2
};
