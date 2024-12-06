import { readItems } from "@directus/sdk";
import { directus } from "./directus";


type Noticias = {
  titulo?: string;
  imagen?: string;
  descripcion?: string
}

export async function getNoticias() {
  return directus.request(readItems("noticias")) as unknown as Noticias
}