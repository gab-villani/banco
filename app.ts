import BancoSpi100forSpi200 from "./transferdata";

const macParaConsultar = '349454F3AB74'; // Substitua pelo valor do MAC desejado
const instanciaBanco = new BancoSpi100forSpi200();

instanciaBanco.consultarLeiturasEInserirNoBanco2(macParaConsultar);
