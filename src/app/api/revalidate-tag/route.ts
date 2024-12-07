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
  const data = await request.json();

  const isSecretValid = data.secret === process.env.REVALIDATION_SECRET;

  const isTagValid = Boolean(data.tag);

  function getErrorMessage() {
    if (!isSecretValid) return errorMessages[Error.InvalidSecret];
    if (!isTagValid) return errorMessages[Error.InvalidTag];
  }

  const errorMessage = getErrorMessage();

  if (errorMessage) {
    return Response.json({
      revalidated: false,
      now: Date.now(),
      message: errorMessage,
    });
  }

  revalidateTag(data.tag);
  return Response.json({ revalidated: true, now: Date.now() });
}