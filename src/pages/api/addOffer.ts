import { Offer } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from 'prisma/prisma';

const addOffer = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: Omit<Offer, "id"> = JSON.parse(req.body);
  await prismaClient.offer.create({ data: { ...body } });
};


export default addOffer;