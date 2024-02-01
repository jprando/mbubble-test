import { App } from ".";

export async function exibirUsuario(this:App, email: string) {
  const usuario = await this.usuarios.obterPorEmail(email);
  if (!usuario) {
    throw new Error("Usuario nao encontrado!");
  }
  console.info("\nUsuario:", usuario, "\n");
}
