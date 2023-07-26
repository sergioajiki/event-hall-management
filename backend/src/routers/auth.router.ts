import { Request, Response, Router } from 'express';
import UserController from '../controller/user.controller';

const userController = new UserController();
const router = Router();

router.get(
  '/login',
  (req: Request, res: Response) => res.json({ message: 'Preparando endpoint Login' }),
)
router.post(
  '/login/register',
  (req: Request, res: Response) => userController.createUser(req, res)
)

export default router;