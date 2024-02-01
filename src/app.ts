import debug from "debug";
import { UsuarioService } from "./services/usuario";

const email = "desenvolvedorads@eletromidia.com.br";
const log = debug("app:info");
const logErro = debug("app:erro");

export class App {
  constructor(private readonly usuarios: UsuarioService) {
    log(new Date(), "inicio");
  }

  async start() {
    try {
      await this.exibirUsuario(email);
    } catch (e) {
      const erro = e instanceof Error ? e : undefined;
      logErro(
        `${erro?.name || ""} ${erro?.message || "Erro inesperado ocorreu"}`,
      );
    }
    finally {
    log( new Date(), "fim");
    }
  }

  async exibirUsuario(email: string) {
    const usuario = await this.usuarios.obterPorEmail(email);
    if (!usuario) {
      throw new Error("Usuario nao encontrado!");
    }
    console.info("\nUsuario:", usuario, "\n");
  }
}
