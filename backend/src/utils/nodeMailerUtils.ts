import nodemailer from 'nodemailer';
import 'dotenv/config';
import { PayloadSendMail } from '../Interfaces/Mail/PayloadSendMail';
import buildActivationUrl from './activationUrlBuilder';

const transport = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.USER_MAILTRAP,
    pass: process.env.PASS_MAILTRAP, 
  },
});

const ADMINEMAIL = 'adminEmail@teste.com';
const sendEmail = async ({ email, username, activationUrl, subjectType }
  : PayloadSendMail): Promise<void> => {
  const inscMsg = `<h1>Bem-vindo ${username}, clique no link para ativar o cadastro</h1><br>
  <h4>
  <a href="${activationUrl}" title="link para ativação">${activationUrl}</a>
  </h4>`;
  const updateMsg = 'As informções do evento foram alteradas' 
  const emailInfo = {
    from: ADMINEMAIL,
    to: email,
    subject: 'email de teste',
    html: subjectType === 'inscr'? inscMsg : updateMsg,
  };
  const emailSent = await transport.sendMail(emailInfo);
  console.log('email foi enviado para', emailSent.accepted[0]);
};

export default {
  sendEmail,
};
