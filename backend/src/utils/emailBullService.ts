import Queue from 'bull';
import nodemailer from './nodeMailerUtils';

const emailQueue = new Queue('emailNotifications', {
  redis: {
    host: 'redis',
    port: 6379,
  },
});

emailQueue.process(async (job) => {
  const { data } = job;
  console.log(`Serviço para enviar:  ${JSON.stringify(job.data)}`);
  await nodemailer.sendEmail(data);
});

export default {
  emailQueue,
};