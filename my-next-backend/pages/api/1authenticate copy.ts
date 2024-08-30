import { NextApiRequest, NextApiResponse } from 'next';
import { OAuth2Client } from 'google-auth-library';
import pb from '../../src/lib/pocketbase';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.NEXT_PUBLIC_BASE_URL
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    const { code } = req.body;

    try {
      // Trocar o código de autorização pelo token de acesso
      const { tokens } = await client.getToken(code);
      client.setCredentials(tokens);

      // Verificar o ID token para obter as informações do usuário
      const ticket = await client.verifyIdToken({
        idToken: tokens.id_token!,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      // Verificar se o usuário já existe no PocketBase
      const existingUser = await pb.collection('users').getFirstListItem(`googleId="${payload?.sub}"`);

      if (existingUser) {
        // Se o usuário já existe, atualize o token de acesso
        await pb.collection('users').update(existingUser.id, {
          accessToken: tokens.access_token,
        });
      } else {
        // Se o usuário não existe, crie um novo registro
        await pb.collection('users').create({
          googleId: payload?.sub,
          email: payload?.email,
          name: payload?.name,
          accessToken: tokens.access_token,
        });
      }

      return res.status(200).json({
        access_token: tokens.access_token,
        user: {
          name: payload?.name,
          email: payload?.email,
        },
      });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to authenticate user' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
