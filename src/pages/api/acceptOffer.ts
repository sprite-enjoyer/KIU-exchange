import { EmailProps } from '@/components/Email';
import sendEmail from '@/helpers/nodeMailer';
import type { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from 'prisma/prisma';

const addOffer = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: EmailProps = JSON.parse(req.body);
  sendEmail({ ...body });

  res.status(200).end();
};


export default addOffer;