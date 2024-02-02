import type { Usuario } from "../db/entity/usuarios";

export interface IUsuarioService {
  obterPorEmail(email: string): Promise<Usuario | undefined>;
}
