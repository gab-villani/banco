import { criarConexaoBanco1 } from "./db_config";

class bancoSpi100forSpi200{

    public async  listarleituras(mac) {
        try {
            const conexaoBanco_1 = criarConexaoBanco1();
    
            // Consulta SQL para selecionar todos os registros da tabela "sensoresSpi"
            const consultaOrigem = `SELECT * FROM "leiturasSpi"\
                                    Where mac ='${mac}'`;
    
            // Utilize o bloco 'try' para lidar com possíveis erros na execução
            try {
                await conexaoBanco_1.connect(); // Conecte-se ao banco de dados
    
                console.log('Conectado ao banco de dados de origem');
    
                const resultados = await conexaoBanco_1.query(consultaOrigem); // Execute a consulta
    
                // Imprimir resultados da consulta
                console.log('Resultados da consulta de origem:', resultados.rows);
            } catch (error) {
                console.error('Erro durante a consulta:', error);
            } finally {
                conexaoBanco_1.end(); // Feche a conexão com o banco de dados, independentemente do resultado
            }
        } catch (err) {
            console.error('Erro na conexão com o banco:', err);
        }
    }
}

