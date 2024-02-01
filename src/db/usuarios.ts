import type { IEntity } from "@mongobubble/core";
import { EntityWithLifecycle, MongoBubble } from "mongobubble";
import { ObjectId } from "mongodb";
import { mongoConfig } from "./config";

export interface IUsuario extends IEntity<string> {
  nome: string;
  empresa: ObjectId;
}

export type Usuario = EntityWithLifecycle<IUsuario, string>;

export const usuarios = new MongoBubble<Usuario, string>({
  uri: mongoConfig.uri,
  db: mongoConfig.banco,
  collectionName: "usuarios",
});
