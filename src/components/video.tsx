"use client";
import React from "react";

const Video = () => {
  return (
    <video
      muted
      loop
      autoPlay
      controls={false}
      playsInline
      onCanPlay={(e) => (e.currentTarget.style.opacity = "100%")}
      className="h-full w-full object-cover opacity-0 transition-opacity duration-500"
    >
      <source
        src="https://cdn.crimsonstroke.xyz/mockup%20video.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
