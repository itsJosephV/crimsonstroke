import { createDirectus, rest } from "@directus/sdk";
if (!process.env.DIRECTUS_API_ENDPOINT) {
  console.log(process.env.DIRECTUS_API_ENDPOINT);
  throw new Error("DIRECTUS_API_ENDPOINT is not defined in the environment variables.");
}


// export const directus = createDirectus(process.env.DIRECTUS_API_ENDPOINT as string).with(rest());


export const directus = createDirectus(process.env.DIRECTUS_API_ENDPOINT as string).with(rest({
  onRequest: (options) => ({ ...options, cache: 'no-store' }),
}));