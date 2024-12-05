import { readItems } from "@directus/sdk";
import { directus } from "./directus";

type HeroButton = {
  label?: string;
  link: string;
}

type Home = {
  hero_title?: string;
  hero_subtitle?: string;
  hero_buttons?: HeroButton[];
  hero_cover?: string
}

export async function getHome() {
  return directus.request(readItems("home")) as unknown as Home
}