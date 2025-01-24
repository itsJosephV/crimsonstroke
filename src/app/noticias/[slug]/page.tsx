import ShareButton from "@/components/ShareButton";

// Función para obtener datos del post (simulación)
async function getPost(slug: string) {
  // Reemplaza esto con tu llamada a API/CMS
  return {
    title: `Noticia sobre ${slug}`,
    description: `Descripción detallada de la noticia ${slug}`,
    content: "Contenido del post...",
  };
}

// Metadata DINÁMICA usando el slug
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://crimsonstroke.xyz/noticias/${params.slug}`, // URL absoluta
      type: "article",
      images: [
        {
          url: "https://crimsonstroke.xyz/og-image.jpg", // Reemplaza con tu imagen
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);
  const absoluteUrl = `https://crimsonstroke.xyz/noticias/${params.slug}`;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <ShareButton
        url={absoluteUrl}
        title={post.title}
        description={post.description}
      />
    </div>
  );
};

export default Page;
