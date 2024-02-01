import { UsuarioService } from "./services/usuario";
import { logErro, logFim, logInicio } from "./utils/logs";

const email = "desenvolvedorads@eletromidia.com.br";

export class App {
  constructor(private readonly usuarios: UsuarioService) {
    logInicio(new Date());
  }

  async start() {
    try {
      const usuario = await this.usuarios.obterPorEmail(email);
      if (!usuario) {
        throw new Error("Usuario nao encontrado!");
      }
      console.info("Usuario:", usuario);
      logFim("OK", new Date());
    } catch (e) {
      const erro = e instanceof Error ? e : undefined;
      logErro(
        `${erro?.name || ""} ${erro?.message || "Erro inesperado ocorreu"}`,
      );
      logFim("COM ERRO", new Date());
    }
  }
}
