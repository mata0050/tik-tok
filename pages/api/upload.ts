// This is an example of to protect an API route
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import type { NextApiRequest, NextApiResponse } from 'next';
import { isGeneratorFunction } from 'util/types';
import { prisma } from '../../db/client';
import { z } from 'zod';

const schema = z.object({
  // id: z.string(),
  caption: z.string(),
  videoUrl: z.string(),
  privacy: z.enum(['PUBLIC', 'PRIVATE']),
  userId: z.string(),
});

async function createPost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = schema.parse(req.body);

    const upload = await prisma.post.create({
      data: data,
    });
    return res.json(upload);
  } catch (error) {
    return res.status(400).send({
      message: `Yo, bad payload!`,
      error,
    });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    if (req.method === 'POST') {
      createPost(req, res);
    }
  } else {
    res.json({
      error:
        'You must be signed in to view the protected content on this page.',
    });
  }
}
