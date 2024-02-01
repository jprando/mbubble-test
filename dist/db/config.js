"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConfig = void 0;
const node_assert_1 = __importDefault(require("node:assert"));
(0, node_assert_1.default)(process.env.DB_MONGO_PROTOCOLO, "env:DB_MONGO_PROTOCOLO");
(0, node_assert_1.default)(process.env.DB_MONGO_USUARIO, "env:DB_MONGO_USUARIO");
(0, node_assert_1.default)(process.env.DB_MONGO_SENHA, "env:DB_MONGO_SENHA");
(0, node_assert_1.default)(process.env.DB_MONGO_SERVIDOR, "env:DB_MONGO_SERVIDOR");
(0, node_assert_1.default)(process.env.DB_MONGO_BANCO, "env:DB_MONGO_BANCO");
exports.mongoConfig = {
    protocolo: process.env.DB_MONGO_PROTOCOLO,
    usuario: process.env.DB_MONGO_USUARIO,
    senha: process.env.DB_MONGO_SENHA,
    servidor: process.env.DB_MONGO_SERVIDOR,
    banco: process.env.DB_MONGO_BANCO,
    get uri() {
        return `${this.protocolo}://${this.usuario}:${this.senha}@${this.servidor}`;
    },
};
