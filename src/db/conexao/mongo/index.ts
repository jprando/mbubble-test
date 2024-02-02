import debug from "debug";
import { MongoClient } from "mongodb";
import { config } from "./config";

const logInfo = debug("conexao:mongo:info");

export { config } from "./config";
export let conexao: MongoClient;

export function obterConexao() {
  if (conexao) {
    return conexao;
  }
  conexao = new MongoClient(config.uri);
  logInfo("obterConexao | OK");
  return conexao;
}

export async function fecharConexao() {
  if (!conexao?.close) return;
  await conexao.close();
  logInfo("fecharConexao | OK");
}
