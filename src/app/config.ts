import assert from "node:assert";

assert(process.env.EMAIL_PADRAO, "env EMAIL_PADRAO nao informado");

export default {
  get emailPadrao() {
    // TODO validar se EMAIL_PADRAO eh um email valido
    if (!process.env.EMAIL_PADRAO) {
      throw new Error("env EMAIL_PADRAO nao informado");
    }
    return process.env.EMAIL_PADRAO;
  },
};
