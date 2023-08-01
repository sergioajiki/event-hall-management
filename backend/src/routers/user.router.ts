import { Request, Response, Router } from 'express';
import UserController from '../controller/user.controller';

const userController = new UserController();
const router = Router();

router.get(
  '/users',
  (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT'),
    userController.getAllUsers(req, res)
  }
)

export default router;