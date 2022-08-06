// This is an example of to protect an API route
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/client';
import { z } from 'zod';

const schema = z.object({
  id: z.string(),
  name: z.string(),
});

async function updateUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = schema.parse(req.body);

    console.log(data);
    const updateUser = await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
      },
    });
    console.log(updateUser);
    return res.json(updateUser);
  } catch (error) {
    return res.status(400).send({
      message: `Error, Please try again`,
      error,
    });
  }
}

async function getUser(email: any, res: NextApiResponse) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        posts: true,
      },
    });
    return res.json(user);
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
  const userEmail = session?.user?.email;

  if (session) {
    if (req.method === 'GET') {
      return getUser(userEmail, res);
    }

    if (req.method === 'PUT') {
      console.log('PUT');
      return updateUser(req, res);
    }
    // protected routes
  } else {
    res.json({
      error:
        'You must be signed in to view the protected content on this page.',
    });
  }
}
