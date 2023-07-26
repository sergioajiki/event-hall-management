import { ActivationUrlPayload } from '../Interfaces/ActivationUrlPayload';
const buildActivationUrl = (payload: ActivationUrlPayload): string => 
  `${process.env.HOST}:${process.env.APP_PORT}/activate/${payload.id}/${payload.activationCode}`;
export default buildActivationUrl;