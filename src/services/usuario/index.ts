import debug from "debug";
import type { MongoBubble } from "mongobubble";
import { usuarios as _usuarios, type Usuario } from "../../db";

const logInfo = debug("service:usuario:info");
const logWarn = debug("service:usuario:warn");

export class UsuarioService {
  constructor(private readonly usuarios: MongoBubble<Usuario, string> = _usuarios) { }

  async obterPorEmail(email: string): Promise<Usuario | undefined> {
    logInfo(`obterPorEmail | ${email}`);
    const usuarioDb = await this.usuarios.get(email);
    if (!usuarioDb) {
      logWarn("Usuario nao encontrado");
      return;
    }
    logInfo("obterPorEmail | OK");
    const { _id, nome, empresa } = usuarioDb;
    return { _id, nome, empresa };
  }
}
