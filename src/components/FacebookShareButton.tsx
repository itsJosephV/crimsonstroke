"use client";
import { FacebookShareButton as FbBtn, FacebookIcon } from "next-share";

const FacebookShareButton = ({
  url,
  quote,
  hashtag,
}: {
  url: string;
  quote: string;
  hashtag: string;
}) => {
  return (
    <FbBtn url={url} quote={quote} hashtag={hashtag}>
      <FacebookIcon size={32} round />
    </FbBtn>
  );
};

export default FacebookShareButton;
