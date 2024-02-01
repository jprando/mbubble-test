import { UsuarioService } from "./services/usuario";

const email = "desenvolvedorads@eletromidia.com.br";

export class App {
  constructor(private readonly usuarios: UsuarioService) {
    console.info("app:inicio");
  }

  async start() {
    try {
      const usuario = await this.usuarios.obterPorEmail(email);
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
}
