import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const productos = await prisma.producto.findMany();
      res.status(200).json(productos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los productos' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
