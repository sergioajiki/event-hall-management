import nodemailer from 'nodemailer';
import 'dotenv/config';
import { PayloadSendMail } from '../Interfaces/Mail/PayloadSendMail';

const transport = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.USER_MAILTRAP,
    pass: process.env.PASS_MAILTRAP, 
  },
});

const templateEmail = async (
  username: string, activationUrl: string, role: string, subjectType: string)
: Promise<string> => {
  console.log('dentro do case', role);
  
  switch (subjectType) {
    case 'inscr':
      return  `<h1>Bem-vindo ${username}, clique no link para ativar o cadastro</h1><br>
        <h4>
        <a href="${activationUrl}" title="link para ativação">${activationUrl}</a>
        </h4>`;
    break;
    case 'changeRole': 
      return  `Olá ${username}, seu status foi atualizado para ${role}`;  
    break;
    default:
      return  'As informações do evento foram alteradas'
    break;
  }
}


const ADMINEMAIL = 'adminEmail@teste.com';
const sendEmail = async ({ email, username, activationUrl, role, subjectType }
  : PayloadSendMail): Promise<void> => {
    console.log('role',role);
    
  const emailInfo = {
    from: ADMINEMAIL,
    to: email,
    subject: 'email de teste',
    html: await templateEmail(username, activationUrl, role, subjectType)
  };
  const emailSent = await transport.sendMail(emailInfo);
  console.log('email foi enviado para', emailSent.accepted[0]);
};

export default {
  sendEmail,
};
