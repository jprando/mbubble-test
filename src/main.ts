import { App } from "./app";
import { usuarios } from "./db";
import { fecharConexao } from "./db/conexao";
import { UsuarioService } from "./services";

const app = new App(new UsuarioService(usuarios));
app.start().finally(fecharConexao);
