import type { UsuarioService } from "../services/usuario";
import { exibirUsuario } from "./exibirUsuario";
import { log } from "./log";
import { start } from "./start";

export class App {
  readonly start = start;
  readonly exibirUsuario = exibirUsuario;

  constructor(readonly usuarios: UsuarioService) {
    log("inicio");
  }
}
