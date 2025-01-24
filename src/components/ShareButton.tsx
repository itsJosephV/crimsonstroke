"use client"; // Si usas hooks como useState

import { LinkedinShareButton, LinkedinIcon } from "next-share";

export default function ShareButton({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) {
  return (
    <LinkedinShareButton
      url={url}
      title={title}
      summary={description}
      source="crimsonstroke.xyz"
    >
      <LinkedinIcon size={32} round />
      <span className="ml-2">Compartir en LinkedIn</span>
    </LinkedinShareButton>
  );
}
