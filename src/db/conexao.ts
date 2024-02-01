import debug from "debug";
import { MongoClient } from "mongodb";
import { mongoConfig } from "./config";

const logInfo = debug("conexao:info");

export let conexao: MongoClient;

export function obterConexao() {
  if (conexao) {
    return conexao;
  }
  logInfo("criando conexao");
  conexao = new MongoClient(mongoConfig.uri);
}

export async function fecharConexao() {
  logInfo("fechando conexao");
  await conexao.close();
}
