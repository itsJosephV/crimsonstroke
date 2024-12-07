import { readItems, readItem } from "@directus/sdk";
import { directus } from "./directus";


type Noticias = {
  id: number;
  titulo?: string;
  imagen?: string;
  descripcion?: string
  text2: string
}

export async function getNoticias() {
  return directus.request(readItems("noticias")) as unknown as Noticias[]
}

export async function getNoticia(id: string) {
  return directus.request(readItem("noticias", id)) as unknown as Noticias
}