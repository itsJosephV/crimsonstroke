import { getNoticia } from "@/lib/noticias";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const noticia = await getNoticia(params.id);

  return <div className="p-10">{noticia.titulo}</div>;
};

export default page;
