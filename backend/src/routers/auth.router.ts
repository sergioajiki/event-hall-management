import { Request, Response, Router } from 'express';
import UserController from '../controller/user.controller';
import ValidationUser from '../midllewares/validationsUser';

const userController = new UserController();
const router = Router();

router.get(
  '/login',
  (req: Request, res: Response) => userController.login(req, res)
)

router.post(
  '/login/register',
  ValidationUser.validateCreateUserFields,
  ValidationUser.ValidatePasswordFormat,
  ValidationUser.ValidateEmailFormat,
  (req: Request, res: Response) => userController.createUser(req, res)
)

router.get(
  '/activate/:userId/:activationCode',
  (req: Request, res: Response) => userController.activateUser(req, res)
)

export default router;