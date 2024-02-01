import type { IEntity } from "@mongobubble/core";
import { EntityWithLifecycle, MongoBubble } from "mongobubble";
import { ObjectId } from "mongodb";
import { obterConexao } from "./conexao";
import { mongoConfig } from "./config";

export interface IUsuario extends IEntity<string> {
  nome: string;
  empresa: ObjectId;
}

export type Usuario = EntityWithLifecycle<IUsuario, string>;

export const usuarios = new MongoBubble<Usuario, string>({
  // uri: mongoConfig.uri,
  client: obterConexao(),
  db: mongoConfig.banco,
  collectionName: "usuarios",
});
