import debug from "debug";
import type { MongoBubble } from "mongobubble";
import type { Usuario } from "../../db/entity/usuarios";
import { IUsuarioService } from "../tipos";

const logInfo = debug("service:usuario:info");
const logWarn = debug("service:usuario:warn");

export class UsuarioService implements IUsuarioService {
  readonly usuarios: MongoBubble<Usuario, string>;

  constructor(usuarios?: MongoBubble<Usuario, string>) {
    this.usuarios =
      usuarios || require("../../db/entity/usuarios/repositorio").default;
  }

  async obterPorEmail(email: string): Promise<Usuario | undefined> {
    logInfo(`obterPorEmail | ${email}`);
    const usuario = await this.usuarios.get(email);
    if (!usuario) {
      logWarn("obterPorEmail | Usuario nao encontrado");
      return;
    }
    logInfo("obterPorEmail | OK");
    return usuario;
  }
}
