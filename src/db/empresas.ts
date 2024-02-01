import { MongoBubble } from "mongobubble";
import { obterConexao } from "./conexao";
import { mongoConfig } from "./config";

export const empresas = new MongoBubble({
  // uri: mongoConfig.uri,
  client: obterConexao(),
  db: mongoConfig.banco,
  collectionName: "empresas",
});
