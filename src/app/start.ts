import type { App } from ".";
import { log, logErro } from "./log";

export async function start(this: App) {
  try {
    const email = process.argv.at(2) || "desenvolvedorads@eletromidia.com.br";
    await this.exibirUsuario(email);
  } catch (e) {
    const erro = e instanceof Error ? e : undefined;
    logErro(
      `${erro?.name || ""} ${erro?.message || "Erro inesperado ocorreu"}`,
    );
  }
  finally {
    log(new Date(), "fim");
  }
}
