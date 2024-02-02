import type { App } from "..";
import appConfig from "../../app/config";
import { log, logErro } from "../log";

export async function iniciar(this: App) {
  try {
    const email = process.argv.at(2) || appConfig.emailPadrao;
    await this.exibirUsuario(email);
  } catch (e) {
    const erro = e instanceof Error ? e : undefined;
    logErro(
      `${erro?.name || ""} ${erro?.message || "Erro inesperado ocorreu"}`,
    );
  } finally {
    log("fim");
  }
}
