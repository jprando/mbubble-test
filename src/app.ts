import type { MongoBubble } from "mongobubble";
import type { Usuario } from "./db";

const email = "desenvolvedorads@eletromidia1.com.br";

export type AppDb = {
  usuarios: MongoBubble<Usuario, string>;
};

export class App {
  private readonly db: AppDb;

  constructor(db: AppDb) {
    this.db = db;
    console.info("app:inicio");
  }

  async start() {
    try {
      const usuario = await this.obterUsuario(email);
      if (!usuario) {
        throw new Error("Usuario nao encontrado!");
      }
      console.info("app:info | Usuario:", usuario);
      console.info("app:fim | OK");
    } catch (e) {
      const erro = e instanceof Error ? e : undefined;
      console.error(
        "app:erro |",
        erro?.name || "",
        erro?.message || "Erro inesperado ocorreu",
      );
      console.info("app:fim | COM ERRO");
    }
  }

  async obterUsuario(email: string): Promise<Usuario | undefined> {
    console.info(`obterUsuario:info | obtendo informacoes do usuario "${email}"`);
    const usuarioDb = await this.db.usuarios.get(email);
    if (!usuarioDb) {
      console.info("obterUsuario:warn | Usuario nao encontrado");
      return;
    }
    console.info(`obterUsuario:info | OK`);
    const { _id, nome, empresa } = usuarioDb;
    return { _id, nome, empresa };
  }
}
