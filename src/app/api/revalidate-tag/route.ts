import { revalidateTag } from 'next/cache';
import type { NextRequest } from 'next/server';

enum Error {
  InvalidSecret = 'invalid-secret',
  InvalidTag = 'invalid-tag',
}

const errorMessages = {
  [Error.InvalidSecret]: 'Invalid Secret',
  [Error.InvalidTag]: 'Invalid Tag',
};

export async function POST(request: NextRequest) {
  // data will contain the body sent in this request (we're going to send this via Directus Flow).
  const data = await request.json();
  console.log('Received data:', data);
  const isSecretValid = data.secret === process.env.REVALIDATION_SECRET;
  const isTagValid = Boolean(data.tag);

  if (!isSecretValid || !isTagValid) {
    return Response.json({
      revalidated: false,
      message: errorMessages[Error.InvalidSecret] || errorMessages[Error.InvalidTag],
    });
  }

  revalidateTag(data.tag); // This invalidates the cache for the given tag.
  return Response.json({ revalidated: true, now: Date.now() });
}