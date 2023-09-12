"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = require("./db_config");
const dayjs_1 = __importDefault(require("dayjs"));
function format_data(epoch) {
    const date = new Date(epoch * 1000);
    if (isNaN(date.getTime())) {
        return '1970-01-01 00:00:00'; // Data inválida, retorna uma data zerada
    }
    const data_formatada = date.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Sao_Paulo",
    });
    return data_formatada;
}
class BancoSpi100forSpi200 {
    async consultarLeiturasEInserirNoBanco2(mac) {
        try {
            const conexaoBanco1 = (0, db_config_1.criarConexaoBanco1)();
            const conexaoBanco2 = (0, db_config_1.criarConexaoBanco2)(); // Assumindo que você também tem uma função para criar a conexão com o banco 2
            const consultaOrigem = `SELECT * FROM "leiturasSpi" WHERE mac = '${mac}'`;
            try {
                await conexaoBanco1.connect();
                console.log('Conectado ao banco de dados de origem');
                const resultados = await conexaoBanco1.query(consultaOrigem);
                // console.log('Resultados da consulta de origem:', resultados.rows);
                // Inserir resultados no banco de destino (banco 2)
                await conexaoBanco2.connect();
                console.log('Conectado ao banco de dados de destino');
                console.log(`Leituras Banco001 :${resultados}`);
                // Vamos supor que você tenha uma tabela "leiturasSpiDestino" no banco 2
                for (const resultado of resultados.rows) {
                    const pressao = resultado.pressao;
                    const tempo = resultado.tempo;
                    const canal = 0; // Defina o canal conforme necessário
                    const mac = resultado.mac;
                    // Converta o formato da data para Unix timestamp
                    const unixTimestamp = (0, dayjs_1.default)(tempo, { format: 'DD/MM/YYYY HH:mm:ss' }).unix();
                    const dataOriginal = format_data(unixTimestamp);
                    const insercaoDestino = `INSERT INTO "leituras" (mac, canal, valor_leitura, data_leitura) VALUES ('${mac}', ${canal}, ${pressao}, '${dataOriginal}')`;
                    console.log(`Leituras Banco002 : ${insercaoDestino}`);
                    await conexaoBanco2.query(insercaoDestino);
                }
                console.log('Inserção concluída no banco de destino');
            }
            catch (error) {
                console.error('Erro durante a consulta ou inserção:', error);
            }
            finally {
                conexaoBanco1.end();
                conexaoBanco2.end();
            }
        }
        catch (err) {
            console.error('Erro na conexão com o banco:', err);
        }
    }
}
exports.default = BancoSpi100forSpi200;
