import { MongoBubble } from "mongobubble";
import { Usuario } from "../../db";

export class UsuarioService {
  constructor(private readonly usuarios: MongoBubble<Usuario, string>) {}

  async obterPorEmail(email: string): Promise<Usuario | undefined> {
    console.info(
      `obterUsuario:info | obtendo informacoes do usuario "${email}"`,
    );
    const usuarioDb = await this.usuarios.get(email);
    if (!usuarioDb) {
      console.info("obterUsuario:warn | Usuario nao encontrado");
      return;
    }
    console.info("obterUsuario:info | OK");
    const { _id, nome, empresa } = usuarioDb;
    return { _id, nome, empresa };
  }
}
