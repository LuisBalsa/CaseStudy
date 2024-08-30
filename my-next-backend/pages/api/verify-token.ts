import { NextApiRequest, NextApiResponse } from 'next';
import pb from '../../src/lib/pocketbase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { token } = req.body;

    try {
      // Verificar se o token está armazenado no PocketBase
      const user = await pb.collection('users').getFirstListItem(`accessToken="${token}"`);

      if (user) {
        return res.status(200).json({
          valid: true,
          user: {
            name: user.name,
            email: user.email,
          },
        });
      } else {
        return res.status(401).json({ valid: false });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to verify token' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
