import BancoSpi100forSpi200 from "./transferdata";

const macParaConsultar = 'C049EF26B7FC'; // Substitua pelo valor do MAC desejado
const instanciaBanco = new BancoSpi100forSpi200();

instanciaBanco.consultarLeiturasEInserirNoBanco2(macParaConsultar);
