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
  // check that the secret provided matches the one in our app
  const isSecretValid = data.secret === process.env.REVALIDATION_SECRET;
  // check that we're receiving a tag
  const isTagValid = Boolean(data.tag);

  function getErrorMessage() {
    if (!isSecretValid) return errorMessages[Error.InvalidSecret];
    if (!isTagValid) return errorMessages[Error.InvalidTag];
  }

  const errorMessage = getErrorMessage();

  // If there's an error, we don't re-validate
  if (errorMessage) {
    return Response.json({
      revalidated: false,
      now: Date.now(),
      message: errorMessage,
    });
  }

  // This is where the magic happens, when doing this, we're telling Next
  // to purge any cache related to this tag
  revalidateTag(data.tag);
  return Response.json({ revalidated: true, now: Date.now() });
}