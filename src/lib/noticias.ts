import { readItems, readItem } from "@directus/sdk";
import { directus } from "./directus";


type Noticias = {
  titulo?: string;
  imagen?: string;
  descripcion?: string
}

export async function getNoticias() {
  return directus.request(
    readItems("noticias", { params: { cache: "no-store" } })
  );
}

export async function getNoticia(id: string) {
  return directus.request(readItem("noticias", id)) as unknown as Noticias
}