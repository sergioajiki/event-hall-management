import { Request, Response, Router } from 'express';

const router = Router();

router.get(
  '/login',
  (req: Request, res: Response) => res.json({ message: 'Preparando endpoint Login' }),
)

export default router;