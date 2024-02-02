import { App } from "./app";
import { fecharConexao } from "./db";
import { UsuarioService } from "./services";

new App(new UsuarioService())
  .start()
  .finally(fecharConexao);
