import assert from "node:assert";

assert(process.env.DB_MONGO_PROTOCOLO, "env DB_MONGO_PROTOCOLO nao informado");
assert(process.env.DB_MONGO_USUARIO, "env DB_MONGO_USUARIO nao informado");
assert(process.env.DB_MONGO_SENHA, "env DB_MONGO_SENHA nao informado");
assert(process.env.DB_MONGO_SERVIDOR, "env DB_MONGO_SERVIDOR nao informado");
assert(process.env.DB_MONGO_BANCO, "env DB_MONGO_BANCO nao informado");

export const config = {
  protocolo: process.env.DB_MONGO_PROTOCOLO,
  usuario: process.env.DB_MONGO_USUARIO,
  senha: process.env.DB_MONGO_SENHA,
  servidor: process.env.DB_MONGO_SERVIDOR,
  banco: process.env.DB_MONGO_BANCO,
  get uri() {
    return `${this.protocolo}://${this.usuario}:${this.senha}@${this.servidor}/${this.banco}`;
  },
};
