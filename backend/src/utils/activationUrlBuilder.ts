import { ActivationUrlPayload } from '../Interfaces/ActivationUrlPayload';
import 'dotenv/config';
console.log(process.env.HOST,process.env.APP_PORT);

const buildActivationUrl = (payload: ActivationUrlPayload): string => 
  `${process.env.HOST}:${process.env.APP_PORT}/activate/${payload.id}/${payload.activationCode}`;

export default buildActivationUrl;