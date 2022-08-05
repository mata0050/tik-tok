// This is an example of to protect an API route
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/client';
import { z } from 'zod';

async function getAllPosts(res: NextApiResponse) {
  try {
    const posts = await prisma.post.findMany();
    const tags: string[] = [];

    posts.forEach((post) => {
      let hashTag = post.caption?.split('#');

      hashTag?.map((hashTag) => {
        if (hashTag !== '') {
          tags.push('#' + hashTag);
        }
      });
    });

    return res.json(tags);
  } catch (error) {
    return res.status(400).send({
      message: `Error, Please try again`,
      error,
    });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (req.method === 'GET') {
    return getAllPosts(res);
  }

  if (session) {
    //  protected route
  } else {
    res.json({
      error:
        'You must be signed in to view the protected content on this page.',
    });
  }
}
