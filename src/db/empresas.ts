import { MongoBubble } from "mongobubble";
import { mongoConfig } from "./config";

export const empresas = new MongoBubble({
  uri: mongoConfig.uri,
  db: mongoConfig.banco,
  collectionName: "empresas",
});
