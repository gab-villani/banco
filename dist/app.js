"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transferdata_1 = __importDefault(require("./transferdata"));
const macParaConsultar = '349454F3AB74'; // Substitua pelo valor do MAC desejado
const instanciaBanco = new transferdata_1.default();
instanciaBanco.consultarLeiturasEInserirNoBanco2(macParaConsultar);
