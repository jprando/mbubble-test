import { IUsuarioService } from "../services/tipos";
import { exibirUsuario, iniciar } from "./functions";
import { log } from "./log";
import { AppServices } from "./tipos";

export class App {
  readonly iniciar = iniciar;
  readonly exibirUsuario = exibirUsuario;
  readonly usuarios: IUsuarioService;

  constructor(services: AppServices) {
    this.usuarios = services.usuarios;
    log("inicio");
  }
}
