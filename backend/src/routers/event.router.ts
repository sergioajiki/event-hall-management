import { Request, Response, Router } from 'express';

const router = Router();

router.get(
  '/event',
  (req: Request, res: Response) => res.json({ message: 'Preparando endpoint de Eventos' }),
)
export default router;