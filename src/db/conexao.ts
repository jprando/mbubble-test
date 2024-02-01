import debug from "debug";
import { MongoClient } from "mongodb";
import { mongoConfig } from "./config";

const logInfo = debug("conexao:info");

export let conexao: MongoClient;

export function obterConexao() {
  if (conexao) {
    return conexao;
  }
  conexao = new MongoClient(mongoConfig.uri);
  logInfo("obterConexao | OK");
}

export async function fecharConexao() {
  await conexao.close();
  logInfo("fecharConexao | OK");
}
