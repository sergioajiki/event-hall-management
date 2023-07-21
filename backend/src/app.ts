import express, { Request, Response }  from 'express';

const app = express();

app.use(express.json());

app.get(
  '/',
  async (_req: Request, res: Response): Promise<Response> => res.status(200).json(
    { message: 'Yeeeiiii'} ),
);

export default app;