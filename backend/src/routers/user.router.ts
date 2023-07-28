import { Request, Response, Router } from 'express';
import UserController from '../controller/user.controller';

const userController = new UserController();
const router = Router();

router.get(
  '/users',
  (req: Request, res: Response) => userController.getAllUsers(req, res)
)

export default router;