import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import Email, { EmailProps } from "@/components/Email";
import { render } from "@react-email/render";

const sendEmail = ({ offerMakerMail, offerMaker, offerTaker, comment, offerTakerMail }: EmailProps) => {
  const emailHtml = render(Email({ offerMaker, offerTaker, comment, offerTakerMail, offerMakerMail }), { pretty: true });

  let mailTransporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });

  let details: Mail.Options = {
    from: `Chilling Email Service<${process.env.EMAIL}>`,
    to: offerMakerMail,
    subject: "KIU exchange: somebody accepted the exchange terms",
    html: emailHtml,
  };

  mailTransporter.sendMail(details, e => undefined);
}

export default sendEmail;