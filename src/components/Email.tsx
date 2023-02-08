import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';
import { Text } from '@react-email/text';

export interface EmailProps {
  offerMaker: string,
  offerMakerMail: string,
  offerTaker: string,
  comment: string,
  offerTakerMail: string
}

const Email = ({ offerMaker, offerTaker, comment, offerTakerMail }: EmailProps) => {
  console.log(offerMaker, offerTaker, comment, offerTakerMail)

  return (
    <Html lang="en">
      <Text>Dear {offerMaker},</Text>
      <Text> You have received a exchange request from {offerTaker}. Here is the comment they left for you:</Text>
      <Text>" {comment} "</Text>
      <Text>Thank you for using our platform. If you have any questions or concerns, please don't hesitate to reach out to us.</Text>
      <Button><a href={"mailto:".concat(offerTakerMail)}>Email the offer taker.</a></Button>
    </Html>
  );
};

export default Email;