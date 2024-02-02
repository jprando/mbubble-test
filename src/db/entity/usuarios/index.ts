import type { IEntity } from "@mongobubble/core";
import { EntityWithLifecycle } from "mongobubble";
import { ObjectId } from "mongodb";

export class Usuario extends EntityWithLifecycle<IEntity<string>, string> {
  nome: string;
  empresa: ObjectId;
  constructor(usuario: { _id: string; nome: string; empresa: ObjectId }) {
    super({ _id: usuario._id });
    this.nome = usuario.nome;
    this.empresa = usuario.empresa;
  }
}
