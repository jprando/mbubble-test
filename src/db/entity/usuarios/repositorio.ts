import { MongoBubble } from "mongobubble";
import { Usuario } from ".";
import { mongo } from "../../conexao";

export default new MongoBubble<Usuario, string>({
  // uri: mongoConfig.uri,
  client: mongo.obterConexao(),
  db: mongo.config.banco,
  collectionName: "usuarios",
});
