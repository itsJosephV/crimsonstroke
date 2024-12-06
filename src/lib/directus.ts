if (!process.env.DIRECTUS_API_ENDPOINT) {
  console.log(process.env.DIRECTUS_API_ENDPOINT);
  throw new Error("DIRECTUS_API_ENDPOINT is not defined in the environment variables.");
}

import { createDirectus, rest } from "@directus/sdk";

export const directus = createDirectus(process.env.DIRECTUS_API_ENDPOINT as string).with(rest({
  onRequest: (options) => ({ ...options, cache: 'no-store' }),
}));