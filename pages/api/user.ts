// This is an example of to protect an API route
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/client';
import { z } from 'zod';

// const schema = z.object({
//   // id: z.string(),
//   caption: z.string(),
//   videoUrl: z.string(),
//   privacy: z.enum(['PUBLIC', 'PRIVATE']),
//   userId: z.string(),
// });

// async function createPost(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const data = schema.parse(req.body);

//     const upload = await prisma.post.create({
//       data: data,
//     });
//     return res.json(upload);
//   } catch (error) {
//     return res.status(400).send({
//       message: `Error, Please try again`,
//       error,
//     });
//   }
// }

async function getUser(email: any, res: NextApiResponse) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
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
      getUser(userEmail, res);
    }
  } else {
    res.json({
      error:
        'You must be signed in to view the protected content on this page.',
    });
  }
}
