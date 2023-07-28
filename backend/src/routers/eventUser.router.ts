import { Request, Response, Router } from 'express';
import EventUserController from '../controller/eventUser.controller';
import ValidationUser from '../midllewares/validationsUser';
const eventUserController = new EventUserController();
const router = Router();

router.post(
  '/subscription/:idEvent',
  ValidationUser.ValidateEmailFormat,
  (req: Request, res: Response) => eventUserController.createSubscription(req, res),
)

export default router;