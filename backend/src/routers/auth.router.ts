import { Request, Response, Router } from 'express';
import UserController from '../controller/user.controller';
import ValidationUser from '../midllewares/validationsUser';

const userController = new UserController();
const router = Router();

router.post(
  '/login',
  ValidationUser.validateLoginFields,
  ValidationUser.ValidateEmailFormat,
  (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Headers', 'X-Custom-Header, Content-Type')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT'),
    userController.login(req, res)}
)

router.post(
  '/login/register',
  ValidationUser.validateCreateUserFields,
  ValidationUser.ValidatePasswordFormat,
  ValidationUser.ValidateEmailFormat,
  (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Headers', 'X-Custom-Header, Content-Type')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT'),
    userController.createUser(req, res)
  }
)

router.post(
  '/login/role',
  ValidationUser.validateLoginFields,
  ValidationUser.ValidateEmailFormat,
  (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Headers', 'X-Custom-Header, Content-Type')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT'),
    userController.getRoleUserByEmail(req, res)}
)

router.get(
  '/activate/:userId/:activationCode',
  (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT'),
    userController.activateUser(req, res)
  }
)

export default router;