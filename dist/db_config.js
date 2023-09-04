"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarConexaoBanco2 = exports.criarConexaoBanco1 = void 0;
const pg_1 = require("pg");
// Função para criar uma conexão ao banco de dados
function criarConexaoBanco1() {
    const config = {
        host: 'spi100.cdcjipwwwpmn.us-east-1.rds.amazonaws.com',
        user: 'postgres',
        password: 'Engaws3016',
        database: 'dbSpi100',
        port: 5432
    };
    return new pg_1.Client(config);
}
exports.criarConexaoBanco1 = criarConexaoBanco1;
function criarConexaoBanco2() {
    const config = {
        host: '54.207.19.84',
        user: 'dev_eng',
        password: 'Eng.3016',
        database: 'db_spi_200',
        port: 5432
    };
    return new pg_1.Client(config);
}
exports.criarConexaoBanco2 = criarConexaoBanco2;
