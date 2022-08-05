// This is an example of to protect an API route
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/client';
import { z } from 'zod';

async function getAllUser(res: NextApiResponse) {
  try {
    const users = await prisma.user.findMany();
    return res.json(users);
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
    return getAllUser(res);
  }

  if (session) {
    // protected routes
  } else {
    res.json({
      error:
        'You must be signed in to view the protected content on this page.',
    });
  }
}
