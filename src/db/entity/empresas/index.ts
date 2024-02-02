import { MongoBubble } from "mongobubble";
import { mongo } from "../../conexao";

export default new MongoBubble({
  // uri: mongoConfig.uri,
  client: mongo.obterConexao(),
  db: mongo.config.banco,
  collectionName: "empresas",
});
