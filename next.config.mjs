/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.DIRECTUS_API_ENDPOINT
          ? process.env.DIRECTUS_API_ENDPOINT.replace("https://", "")
          : "",
      },
    ],
  },
};

export default nextConfig;
