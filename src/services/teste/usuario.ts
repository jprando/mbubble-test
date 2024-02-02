import { ObjectId } from "mongodb";
import { logTeste } from "../../app/log";
import { Usuario } from "../../db/entity/usuarios";
import type { IUsuarioService } from "../tipos";

const _id = "usuario@teste.com";
const nome = "Usuario de Teste";
const empresa = new ObjectId("000000000000000000000000");

export class TesteUsuarioService implements IUsuarioService {
  obterPorEmail() {
    logTeste(`obterPorEmail | ${_id}`);
    return Promise.resolve(new Usuario({ _id, nome, empresa }));
  }
}
