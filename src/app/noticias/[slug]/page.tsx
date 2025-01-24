import FacebookShareButton from "@/components/FacebookShareButton";
import ShareButton from "@/components/ShareButton";
import type { Metadata } from "next";

// Función para obtener datos del post (simulación)
async function getPost(slug: string) {
  // Reemplaza esto con tu llamada a API/CMS
  return {
    title: `Noticia sobre ${slug}`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue est, laoreet ac sapien quis, dapibus volutpat est. Aliquam laoreet blandit enim, quis maximus dolor placerat a. Vestibulum et ante a orci dignissim sodales vitae et erat. Donec vitae nibh sapien. Phasellus sit amet metus dui. Maecenas magna odio, pharetra a tincidunt et, cursus et enim. Maecenas mollis dui nisl, sed cursus diam suscipit quis. Cras blandit pellentesque lobortis.`,
    content: "Contenido del post...",
    hashtag: "#crimsonstroke",
  };
}

// Metadata DINÁMICA usando el slug
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      description: post.description,
      type: "article",
      images: [
        {
          url: "https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          width: 1200,
          height: 630,
        },
      ],
    },
    // openGraph: {
    //   title: post.title,
    //   description: post.description,
    //   url: `https://crimsonstroke.xyz/noticias/${params.slug}`, // URL absoluta
    //   type: "article",
    //   images: [
    //     {
    //       url: "https://crimsonstroke.xyz/og-image.jpg", // Reemplaza con tu imagen
    //       width: 1200,
    //       height: 630,
    //     },
    //   ],
    // },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
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
      <FacebookShareButton
        url={absoluteUrl}
        quote={post.title}
        hashtag={post.hashtag}
      />
    </div>
  );
};

export default Page;
