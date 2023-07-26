import { Request, Response, Router } from 'express';
import UserController from '../controller/user.controller';
import ValidationUser from '../midllewares/validations';

const userController = new UserController();
const router = Router();

router.get(
  '/login',
  (req: Request, res: Response) => res.json({ message: 'Preparando endpoint Login' }),
)
router.post(
  '/login/register',
  ValidationUser.validateCreateUserFields,
  ValidationUser.ValidatePassword,
  (req: Request, res: Response) => userController.createUser(req, res)
)

export default router;