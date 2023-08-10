import { Request, Response, Router } from 'express';
import EventUserController from '../controller/eventUser.controller';
import ValidationUser from '../midllewares/validationsUser';
const eventUserController = new EventUserController();
const router = Router();

router.post(
  '/subscriptionEvent/:idEvent',
  ValidationUser.ValidateEmailFormat,
  (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT'),
    eventUserController.createSubscription(req, res)
  },
)

export default router;