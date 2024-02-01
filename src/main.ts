import { App } from "./app";
import { fecharConexao, usuarios } from "./db";
import { UsuarioService } from "./services";

new App(new UsuarioService(usuarios))
  .start()
  .finally(fecharConexao);
