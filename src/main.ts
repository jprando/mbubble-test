import { App } from "./app";
import { fecharConexao } from "./db/conexao/mongo";
import { UsuarioService } from "./services";
// import { TesteUsuarioService } from "./services/teste/usuario";

new App({
  usuarios: new UsuarioService(),
  // usuarios: new TesteUsuarioService(),
})
  .iniciar()
  .finally(fecharConexao);
