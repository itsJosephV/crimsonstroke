"use client";
import React from "react";
import { LinkedinShareButton, LinkedinIcon } from "next-share";

const ShareButton = () => {
  return (
    <div>
      <LinkedinShareButton
        url="https://crimsonstroke.xyz"
        title="crimsonstroke.xyz"
        summary="Personal website of Crimson Stroke"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareButton;
