import { App } from "./app";
import { usuarios } from "./db";
import { UsuarioService } from "./services";

new App(new UsuarioService(usuarios)).start();
