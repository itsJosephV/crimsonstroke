/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async headers() {
    return process.env.NODE_ENV === "development"
      ? []
      : [
          {
            source: "/(.*)",
            headers: [
              {
                key: "Content-Security-Policy",
                value: `frame-src 'self' ${process.env.CONTENT_SECURITY_POLICY_DIRECTIVES__FRAME_SRC};`,
              },
            ],
          },
        ];
  },
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
