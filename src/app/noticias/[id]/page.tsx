import { getNoticia } from "@/lib/noticias";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const noticia = await getNoticia(params.id);

  return (
    <div className="p-10">
      {noticia.titulo}
      <Link className="block" href={"/"}>
        ← go back
      </Link>
    </div>
  );
};

export default page;